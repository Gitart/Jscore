function rentTermHideShow(t) {
  var e = $('#id_action').val();
  - 1 != ['sdam',
  'snimu'].indexOf(e) ? /.+\/grid.*/.test(location.pathname) ? ($('#rent-term').append(t), $('#rent-term').show())  : $('#id_object_all').after(t)  : (t.detach(), $('#rent-term').hide())
}
function hideShowNewBuilding(t) {
  act = $('#id_action').val(),
  obj = $('#id_object_all').val(),
  'prodam' != act || 'kvartiru' != obj && 'gostinku-komnatu' != obj ? t.detach()  : $('#fldSublocality').before(t)
}
$(document).ready(function () {
  function t() {
    var t = {
      title: 'title',
      url: window.post_url() + window.location.search
    };
    window.history.pushState(t, t.title, t.url)
  }
  $.ajaxSetup({
    crossDomain: !1,
    beforeSend: function (t, e) {
      csrfSafeMethod(e.type) || t.setRequestHeader('X-CSRFToken', getCookie('csrftoken'))
    }
  });
  var e = $('#id_rent_term'),
  c = $('#new-building'),
  i = $('#house-type'),
  a = window.location.href,
  o = new RegExp(/(prodam|sdam|snimu|kuplyu)/),
  n = $('#current-city').attr('city-id'),
  s = $('#top-city :selected').attr('slug');
  if (o.test(a)) {
    var r = a.match(/.+\/([a-z-]+)\/(prodam|sdam|snimu|kuplyu)-([a-z-]+)[\/.+]?/);
    null != r && ($('#id_action').val(r[2]), $('#id_object_all').val(r[3]), $('#id_city').val(n))
  } else $('#id_city').val(n);
  filterHideShow(i),
  metroHideShow(),
  rentTermHideShow(e),
  hideShowNewBuilding(c),
  $('#id_action').change(function () {
    rentTermHideShow(e),
    hideShowNewBuilding(c),
    $('#search_query').attr('action', post_url()),
    t()
  }),
  $('#loc-wrap input:checkbox').each(function () {
    var t = $(this).parent().text();
    1 == $(this).prop('checked') && $('#chosen-subloc').append('<span>' + t + '</span>')
  }),
  $('#metr-choice input:checkbox').each(function () {
    var t = $(this).parent().text();
    1 == $(this).prop('checked') && $('#chosen-metro').append('<span>' + t + '</span>')
  });
  var l = $('.province-list label:contains(" Харьковский р-н")').clone(withDataAndEvents = !0);
  $('#id_8subloc').append(l),
  window.toHistory = t,
  $('#search_query').attr('action', post_url),
  $('#id_object_all').change(function () {
    filterHideShow(i),
    $('#search_query').attr('action', post_url()),
    hideShowNewBuilding(c)
  }),
  $('#id_city').change(function () {
    var t = $(this).val(),
    e = $('#top-city option[value=' + t + ']').attr('slug'),
    c = $('#id_city option:selected').text(),
    i = new RegExp('^/[a-zs-]+', 'i');
    $.ajax({
      url: '/board/set_city/',
      type: 'POST',
      data: {
        chosen_city_id: t
      },
      success: function (a) {
        $('.first-invisible a').each(function () {
          var t = $(this).attr('href');
          t = t.replace(i, e),
          $(this).attr('href', '/' + t)
        }),
        $('#current-city span').replaceWith('<span>' + c + '</span>'),
        $('#current-city').attr('slug', e),
        $('#current-city').attr('city-id', t),
        $('#search_query').attr('action', post_url());
        var o = location.pathname.replace(s, e);
        - 1 == o.indexOf('/grid') ? location.href = o : location.href = o + '?woagent=on'
      },
      error: function () {
        alert('Ошибка при отправке данных выбора города!')
      }
    })
  }),
  $('#without_agent').click(function () {
    console.log('Ci'),
    $('#id_woagent').val('checked'),
    $('#search_query').submit()
  }),
  $('span.to-push').click(function () {
    $(this).next().toggle()
  }),
  $('.box-select-close').bind('click', function () {
    $(this).parent().hide()
  }),
  $('.ok-tab').click(function () {
    $(this).parent().hide()
  }),
  $('#province-tab').click(function () {
    $('#sublocality-choice').hide(),
    $('#subloc-tab').removeClass('active-tab'),
    $('#province-choice').show(),
    $(this).addClass('active-tab')
  }),
  $('#subloc-tab').click(function () {
    $('#province-choice').hide(),
    $('#province-tab').removeClass('active-tab'),
    $('#sublocality-choice').show(),
    $(this).addClass('active-tab')
  }),
  $('#sublocality-choice input:checkbox, #province-choice input:checkbox').change(function () {
    var t = $(this).parent().text();
    1 == $(this).prop('checked') ? ($(this).parent().hasClass('big-subloc-head') && $(this).parent().parent().find('li label').each(function () {
      var t = $(this).text();
      $(this).find('input:checkbox').prop('checked', !0),
      $('#chosen-subloc span:contains("' + t + '")').detach()
    }), $('#chosen-subloc').append('<span>' + t + '</span>'))  : ($(this).parent().hasClass('big-subloc-head') && $(this).parent().parent().find('li input:checkbox').each(function () {
      $(this).prop('checked', !1)
    }), $('#chosen-subloc span:contains("' + t + '")').detach())
  }),
  $('#chosen-subloc').on('click', 'span', function () {
    var t = $(this).text();
    $(this).detach();
    var e = ($('#sublocality-choice label, #province-choice label'), $('#sublocality-choice label:contains("' + t + '"), #province-choice label:contains("' + t + '")'));
    $(e).hasClass('big-subloc-head') ? $(e).parent().find('input:checkbox').each(function () {
      $(this).prop('checked', !1)
    })  : $(e).find('input:checkbox').prop('checked', !1)
  }),
  $('#metr-choice input:checkbox').change(function () {
    var t = $(this).parent().text();
    1 == $(this).prop('checked') ? ($(this).parent().hasClass('bold') && $(this).parent().next().find('li label').each(function () {
      var t = $(this).text();
      $(this).find('input:checkbox').prop('checked', !0),
      $('#chosen-metro span:contains("' + t + '")').detach()
    }), $('#chosen-metro').append('<span>' + t + '</span'))  : ($(this).parent().hasClass('bold') && $(this).parent().next().find('input:checkbox').each(function () {
      $(this).prop('checked', !1)
    }), $('#chosen-metro span:contains("' + t + '")').detach())
  }),
  $('#chosen-metro').on('click', 'span', function () {
    var t = $(this).text();
    $(this).detach();
    var e = $('#metr-choice label:contains("' + t + '")');
    e.hasClass('bold') ? $(e).parent().find('input:checkbox').each(function () {
      $(this).prop('checked', !1)
    })  : $(e).find('input:checkbox').prop('checked', !1)
  }),
  $('.fast-adm-del-link').click(function (t) {
    t.preventDefault();
    var e = this.href,
    c = $(this).closest('.ad-preview'),
    i = e.match(/\/(\d+)\//),
    a = i[1];
    $('#confirm-pop-up').dialog(),
    $('#confirm-yes').click(function () {
      $.ajax({
        url: e,
        type: 'POST',
        data: {
          pk: a
        },
        success: function (t) {
          c.detach(),
          $.messagePopUp('Объявление удалено')
        },
        error: function () {
          alert('Ошибка! Объявление не удалено')
        }
      }),
      $('#confirm-pop-up').dialog('close')
    }),
    $('#confirm-no').click(function () {
      $('#confirm-pop-up').dialog('close')
    })
  }),
  $('.ad-preview').on('click', '.star', function () {
    var t = $(this).closest('.item-info').find('.kod').text().replace(/\D/g, ''),
    e = this.src,
    c = this;
    $.ajax({
      url: '/board/add_to_fav/',
      type: 'POST',
      data: {
        id: t
      },
      dataType: 'json',
      success: function (t) {
        $.messagePopUp(t.message),
        'success' == t.result && ($(c).attr('src', e.replace(/star-grey/, 'star')), $(c).attr('class', 'star-true'), $(c).attr('title', 'Убрать из моего блокнота'), $(c).attr('alt', 'Убрать из блокнота'))
      },
      error: function () {
        aleft('Ошибка обработки данных!')
      }
    })
  }),
  $('.ad-preview').on('click', '.star-true', function () {
    var t = $(this).closest('.item-info').find('.kod').text().replace(/\D/g, ''),
    e = this.src,
    c = this;
    $.ajax({
      url: '/board/remove_from_fav/',
      type: 'POST',
      data: {
        id: t
      },
      dataType: 'json',
      success: function (t) {
        'success' == t.result ? ($(c).attr('src', e.replace(/star/, 'star-grey')), $(c).attr('class', 'star'), $(c).attr('title', 'Добавить в мой блокнот'), $(c).attr('alt', 'Добавить в блокнот'), $.messagePopUp(t.message))  : alert('Произошла непредвиденная ошибка!')
      },
      error: function () {
        alert('Ошибка обработки данных!')
      }
    })
  }),
  $('.fast-adm-up').click(function () {
    var t = $(this).closest('.item-info').find('.kod').text().replace(/\D/g, '');
    $.ajax({
      type: 'POST',
      url: '/board/' + t + '/up/',
      success: function (t) {
        $.messagePopUp(t)
      }
    })
  }),
  $('.adm-up').click(function () {
    var t = $(this).closest('#left_info').find('.f_value.kod').text().replace(/\D/g, '');
    $.ajax({
      type: 'POST',
      url: '/board/' + t + '/up/',
      success: function (t) {
        $.messagePopUp(t)
      }
    })
  })
});
