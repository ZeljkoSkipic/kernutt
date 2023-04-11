"use strict";

jQuery(function ($) {

  // DOM
  const loadMore = $('.author-posts-load-more');
  const wrapper = $('.posts_grid_inner');

  // Vars

  var controller = null;

  // Events

  loadMore.on('click', loadPosts);

  // Functions

  async  function loadPosts(e) {

    e.preventDefault();

    if (controller) {
        controller.abort();
      }

    const data = new FormData();
    let offset =  wrapper.children().length;
    let user = loadMore.data('user');
    let total = loadMore.data('total');
    let category = loadMore.data('category');

    data.append('action', 'posts_load_more');
    data.append('nonce', theme.nonce);
    data.append('offset', offset);
   

    if(user) {
      data.append('user', user);
    }
    else if(category) {
      data.append('cat', category);
    }
    else {
      return false;
    }

    controller = new AbortController();
    let signal = controller.signal;

    const response = await fetch(theme.ajax_admin, {
      method: 'POST',
      body: data,
      signal
    });

    if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

    const authorPosts = await response.text();

    if(authorPosts) {
        wrapper.append(authorPosts);
        controller = null;
        if(total === wrapper.children().length) {
            loadMore.remove();
        }
    } 

  };
});