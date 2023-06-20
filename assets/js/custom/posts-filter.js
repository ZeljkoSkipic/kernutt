"use strict";

jQuery(function ($) {
    const categoryInput = ".post_categories";
    const postsWrapper = $(".posts_grid_inner");
    const loadMore = $(".load-more-filter");
    const childCategoriesWrapper = $('.content_filter .posts_filter_bottom');
    const filterPanel = $('.posts_filters_panel');
    const visualElementDelete = '.filter_panel_e_delete';
    const select = $('.posts_filter_top');
    const filterTermsWrapper = $('.posts_filter_bottom');
    const loader = $('.filter_loader');
    const mediaCategoriesWrapper = $('.media_cat');

    let selectedCategories = [];
    let selectedCategoriesChildren = [];
    var controller = null;

    // Sync params with url function

    const syncParamsWithUrl = () => {
        const currentUrl = window.location.href;
        const url = new URL(currentUrl);

        if (url.searchParams.get('categories') !== null) {
            selectedCategories = url.searchParams.get('categories').split('-');
        }

        if (url.searchParams.get('categoriesChildren') !== null) {
            let selectedCategoriesChildrenUrl = url.searchParams.get('categoriesChildren').split('-');

            if (selectedCategoriesChildrenUrl) {
                selectedCategoriesChildrenUrl.forEach((child) => {
                    selectedCategoriesChildren.push({
                        parentID: $(`#${child}`).data('parent'),
                        ID: child
                    })
                })
            }
        }
    }

    // Visual Panel Function

    const visualPanel = (selectedCategories, selectedCategoriesChildren) => {


        filterPanel.html("");

        // Parent terms

        if (selectedCategories.length !== 0) {
            selectedCategories.map((catID) => {
                const visualElem = $('<span> <span class="filter_panel_e_delete">&#10005;</span></span>');
                visualElem.addClass('filter_panel_e');
                const checkbox = $('#' + catID + '');
                visualElem.attr('data-term-id', checkbox.val())
                visualElem.prepend($('label[for="' + checkbox.val() + '"]').text());
                filterPanel.append(visualElem);
            })
        }

        // Child terms

        if (selectedCategoriesChildren.length !== 0) {
            Object.keys(selectedCategoriesChildren).map((key) => {
                const visualElem = $('<span> <span class="filter_panel_e_delete">&#10005;</span></span>');
                visualElem.addClass('filter_panel_e');
                const checkbox = $('#' + selectedCategoriesChildren[key].ID + '');
                visualElem.attr('data-term-id', checkbox.val())
                visualElem.prepend($('label[for="' + checkbox.val() + '"]').text());
                const parent = $('.filter_panel_e[data-term-id="' + selectedCategoriesChildren[key].parentID + '"]');
                if (parent.length !== 0) {
                    parent.after(visualElem);
                }

                else {
                    filterPanel.append(visualElem)
                }
            })
        }
    }

    const visualPanelDelete = (e) => {
        const current = $(e.currentTarget);
        const currentID = current.closest('.filter_panel_e').data('term-id');
        $("#" + currentID + "").trigger('click');
    }

    // Sync params with url

    syncParamsWithUrl();

    // Add visual panel after refresh

    visualPanel(selectedCategories, selectedCategoriesChildren);

    const filterAjaxRequest = async () => {

        if (controller) {
            controller.abort();
        }

        // Loader

        loader.removeClass('disabled');

        // Get Params from Url
        const currentUrl = window.location.href;
        const url = new URL(currentUrl);
        let params = url.searchParams.get('categories');
        let childParams = url.searchParams.get('categoriesChildren');
        let offset = url.searchParams.get('offset');

        if (params) {
            params = params.split('-');
        }

        if (childParams) {
            childParams = childParams.split('-');
        }

        const data = new FormData();
        data.append("action", "posts_filter");
        data.append("nonce", theme.nonce);
        data.append("categories", params !== null ? params : "");
        data.append("categoriesChildren", childParams !== null ? childParams : "");

        if (offset !== null) data.append("offset", offset);

        controller = new AbortController();
        let signal = controller.signal;

        const request = await fetch(theme.ajax_admin, {
            method: "POST",
            body: data,
            signal,
        });

        if (!request.ok) {
            throw new Error(`HTTP error! status: ${request.status}`);
        }

        const posts = await request.json();

        // loader

        loader.addClass('disabled');

        if (posts) {
            if (posts.posts_html.length !== 0) {
                controller = null;

                if (posts.load_more === false) {
                    postsWrapper.html("");

                    if (posts.child_categories.length !== 0) {
                        Object.keys(posts.child_categories).forEach(parentKey => {
                            Object.keys(posts.child_categories[parentKey]).forEach(childKey => {
                                if ($(`#${posts.child_categories[parentKey][childKey].term_id}`).length === 0) {
                                    if (parentKey !== theme.mediaTypeCatID) {
                                        $(`#${parentKey}`).parent().after(`
                                        <div class='child-cat' data-parent="${parentKey}">
                                            <input data-parent="${parentKey}" data-child="true" class="post_categories" type="checkbox" id="${posts.child_categories[parentKey][childKey].term_id}" name="post-category" value="${posts.child_categories[parentKey][childKey].term_id}">
                                            <label data-parent="${parentKey}" for="${posts.child_categories[parentKey][childKey].term_id}">${posts.child_categories[parentKey][childKey].name}</label>
                                        </div>
                                        `)
                                    }
                                }
                            });
                        });
                    }
                }

                postsWrapper.append(posts.posts_html);
            } else {

                // No results in Load More
                if (posts.load_more === true) {

                    if ($('.filter_no_posts').length === 0) {

                        loadMore.after(`
                        <p class="filter_no_posts">${theme.loadMore}</p>
                        `)
                    }

                    setTimeout(() => {
                        $('.filter_no_posts').remove();
                    }, 1000)
                }

                // No results in filtering

                else {

                    // No results

                    postsWrapper.html("");
                    postsWrapper.html('<p class="filter_no_results"> No results for the given terms. </p>')
                }
            }
        }
    };

    const urlApi = (params, childParams = [], offset = null) => {
        const currentUrl = window.location.href;
        const url = new URL(currentUrl);

        if (params.length !== 0) {
            url.searchParams.set("categories", params.join("-"));
        } else {
            url.searchParams.delete("categories");
        }

        if (childParams.length !== 0) {
            const childParamsIDs = childParams.map((child) => {
                return child.ID;
            });

            url.searchParams.set("categoriesChildren", childParamsIDs.join("-"));
        } else {
            url.searchParams.delete("categoriesChildren");
        }

        if (offset && offset !== null) {
            url.searchParams.set("offset", offset);
        } else {
            url.searchParams.delete("offset");
        }

        history.pushState({}, "", url);
    };

    const filter = (e) => {
        const current = $(e.currentTarget);
        const categoryID = current.val();
        const checked = current.prop("checked");

        if (current.data('child') == true) {

            if (checked === true) {
                selectedCategoriesChildren.push({
                    parentID: current.data('parent'),
                    ID: categoryID
                });
            } else {

                selectedCategoriesChildren = selectedCategoriesChildren.filter((child) => {
                    return child.ID != categoryID
                })
            }
        }

        else {

            if (checked === true) {
                selectedCategories.push(categoryID);
            } else {
                const indexToDelete = selectedCategories.indexOf(categoryID);

                if (indexToDelete !== -1) {
                    selectedCategories.splice(indexToDelete, 1);

                    // Delete all selected children after parent in unchecked

                    selectedCategoriesChildren = selectedCategoriesChildren.filter((child) => {
                        return child.parentID != categoryID
                    });

                    // Delete children from dom

                    $('[data-parent="' + categoryID + '"]').remove();
                }
            }
        }

        urlApi(selectedCategories, selectedCategoriesChildren);
        visualPanel(selectedCategories, selectedCategoriesChildren);
        filterAjaxRequest();
    };

    const loadMoreApi = (e) => {
        e.preventDefault();

        const currentUrl = window.location.href;
        const url = new URL(currentUrl);
        const offset = postsWrapper.children().length;

        // Update Url just for offset

        url.searchParams.set('offset', offset);
        history.pushState({}, "", url);

        filterAjaxRequest();
    };


    const popup = (e) => {
        const current = $(e.currentTarget);

        if (current.hasClass('open')) {
            current.removeClass('open');
            current.next(filterTermsWrapper).slideUp('fast', 'linear');
        }

        else {
            current.addClass('open');
            current.next(filterTermsWrapper).slideDown('fast', 'linear');
        }

    }

    $('body').on('change', categoryInput, filter);
    $('body').on('click', visualElementDelete, visualPanelDelete);
    select.on('click', popup);
    loadMore.on("click", loadMoreApi);


    // Open Popup on Init

    $('.posts_filter_top.open_init').trigger('click');
});
