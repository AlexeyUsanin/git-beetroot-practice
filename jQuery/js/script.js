$(function () {
  const title = $('#title');
  console.log('title', title);

  const paragraph = $('<p>tetstststs</p>', {});

  title.addClass('title');

  console.log('paragraph', paragraph)


  console.log(title.text('Helllo new text'))

  const block = $('.block');

  block.append(paragraph);
  console.log('block', block);
  const span = $('span');
  console.log('span', span);


  /////////////////////////////////////////////////

  const accordionItem = $('.accordion__item');

  accordionItem.on('click', function() {
    const content = $(this).find('.accordion__content');

    $('.accordion__content').not(content).slideUp(600).removeClass('active')

    if (content.hasClass('active')) {
      content.removeClass('active');
      content.slideUp();
    } else {
      content.addClass('active');
      content.slideDown(600)
    }
  })

  console.log('accordionItem', accordionItem)
});