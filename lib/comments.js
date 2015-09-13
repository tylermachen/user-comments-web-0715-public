'use-strict';

$(document).ready(function() {
  hideErrors();
  hideForm();
  addCommentListener();
  cancelListener();
  submitCommentListener();
});

function hideErrors() {
  $('#comment-error, #com-email-error, #com-name-error').hide();
}

function hideForm() {
  $('#add-comment').hide();
}

function addCommentListener() {
  $('#show-comment-form').on('click', function() {
    $('#add-comment').show();
  });
}

function cancelListener() {
  $('#cancel').on('click', function() {
    hideForm();
  });
}

function submitCommentListener() {
  $('input:submit').on('click', function() {
    nameValidator();
    emailValidator();
    commentValidator();
    addComment();
  })
}

function nameValidator() {
  if ($('#comment-name').val().length <= 3) {
    $('#com-name-error').show();
  }
}

function emailValidator() {
  if (!$('#com-email').val().match(/^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+@[a-zA-Z0-9_-]+.([a-z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)$/)) {
    $('#com-email-error').show();
  }
}

function commentValidator() {
  if ($('#comment').val().length === 0) {
    $('#comment-error').show();
  }
}

function addComment() {
  $('#posts').append("<div class='newcomment'><span class='name'> \
                     " + $('#comment-name').val() + "</span> \
                      <span class='email'>" + $('#com-email').val() + "</span> \
                      <span class='date'>" + new Date().toLocaleTimeString() +
                      "</span><p class='comment'>" + $('#comment').val() +
                      "</p></div>");
  $('#comment, #com-email, #comment-name').val('');
  hideForm();
}
