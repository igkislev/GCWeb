/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 *
 * Version: @wet-boew-build.version@
 *
 */
/*
----- Russian dictionary (il8n) ---
 */
(function() {
	"use strict";
	var _pe = window.pe || {
		fn: {}
	};
	_pe.dic.ind = {
		'%lang-code': 'ru',
		'%lang-eng': '@%lang-eng@',
		'%lang-fra': 'russe',
		'%lang-native': 'Русский язык',
		'%all': 'Все',
		'%home': 'На главную',
		'%main-page': 'Главная',
		'%top-of-page': 'Наверх',
		'%you-are-in': 'Вы находитесь в:',
		'%welcome-to': 'Добро пожаловать в:',
		'%loading': 'Загрузка ...',
		'%processing': 'обработки ...',
		'%search': 'Поиск',
		'%search-for-terms': 'Поиск терминов:',
		'%no-match-found': 'Соответствий не найдено',
		'%matches-found': {
			'mixin': '[MIXIN] cоответствий найдено'
		},
		'%menu': 'Меню',
		'%settings': 'настройки',
		'%languages': 'Языки',
		'%about': 'О',
		'%current': '(текущая)',
		'%hide': 'Скрыть',
		'%error': 'Ошибка',
		'%colon': ':',
		'%hyphen': ' - ',
		'%start': 'Начать',
		'%stop': 'Стоп',
		'%back': 'Назад',
		'%new-window': ' (Откроется в новом окне)',
		'%minute-ago': 'минуту назад',
		'%couple-of-minutes': 'пару минут назад',
		'%minutes-ago': {
			'mixin': '[MIXIN] минут назад'
		},
		'%hour-ago': 'час назад',
		'%hours-ago': {
			'mixin': '[MIXIN] часов назад'
		},
		'%days-ago': {
			'mixin': '[MIXIN] дней назад'
		},
		'%yesterday': 'вчера',

		'%next': 'Следующий',
		'%previous': 'Предыдущий',
		'%first': 'Первое',
		'%last': 'Последнее',

		/* Archived Web page template */
		'%archived-page': 'Эта веб-страница находится в архиве в Интернете.',
		/* Menu bar */
		'%sub-menu-help': '(откройте подменю клавишей Ввод, закройте клавишей Escape)',
		/* Tabbed interface */
		'%tab-rotation': {
			'disable': 'Остановить ротацию вкладки',
			'enable': 'Начать ротацию вкладки'
		},
		'%tab-list': 'Вкладка списка',
		'%tab-panel-end-1': 'Конец этой вкладке панели.',
		'%tab-panel-end-2': 'Вернитесь на вкладку список',
		'%tab-panel-end-3': 'или продолжать остальной страницы.',
		/* Multimedia player */
		'%play': 'Проиграть',
		'%pause': 'Пауза',
		'%open': 'Oткрыть',
		'%close': 'Закрыть',
		'%rewind': 'Перемотка',
		'%fast-forward': 'Ускоренная перемотка',
		'%mute': {
			'enable': 'Отключение звука',
			'disable': 'Включить звук'
		},
		'%closed-caption': {
			'disable': 'Скрыть Субтитры',
			'enable': 'Показать Субтитры'
		},
		'%closed-caption-error': 'Ошибка загрузки субтитров',
		'%audio-description': {
			'enable': 'Включить описание аудио',
			'disable': 'Отключить Описание аудио'
		},
		'%progress-bar': 'использовать клавиши влево и влраво для передвижения вперед и перемотки',
		'%no-video': 'Ваш браузер не поддерживает воспроизведение этого видео, пожалуйста, скачайте видео ниже',
		'%position': 'Текущая позиция:',
		'%percentage': 'Воспроизведение процентах:',
		'%duration': 'Общее время:',
		'%buffered': 'Буферизованный:',
		/* Share widget */
		'%favourite': 'Фавориты',
		'%email': 'E-mail',
		'%share-text': 'Поделиться ссылкой на страницу',
		'%share-hint': ' с {s} ',
		'%share-email-subject': 'Интересные страницы',
		'%share-email-body': 'Надеюсь, эта страница покажется вам интересной:\n{t} ({u})',
		'%share-fav-title': '(закладку на этой странице)',
		'%share-manual': 'Пожалуйста, закройте это окно и нажмите Ctrl-D чтобы добавить эту страницу.',
		'%share-showall': 'Показать все ({п})',
		'%share-showall-title': 'Все закладки сайтов',
		'%share-disclaimer' : 'Нет одобрение любых продуктов или услуг, выраженных или подразумеваемых.',
		/* Form validation */
		'%form-not-submitted': 'Формы не могут быть представлены, потому что ',
		'%errors-found': ' были обнаружены ошибки.',
		'%error-found': ' была обнаружена ошибка.',
		/* Date picker */
		'%datepicker-hide': 'Скрыть календарь',
		'%datepicker-show': 'Выберите дату из календаря для поля:',
		'%datepicker-selected': 'Выбранный',
		/* Calendar */
		'%calendar-weekDayNames': ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
		'%calendar-monthNames': ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		'%calendar': 'Календарь',
		'%calendar-currentDay': '(Текущий день)',
		'%calendar-goToLink': 'Перейти к<span class="wb-invisible"> месяцу года</span>',
		'%calendar-goToTitle': 'Перейти к месяцу года',
		'%calendar-goToMonth': 'Месяц:',
		'%calendar-goToYear': 'Год:',
		'%calendar-goToButton': 'Перейти',
		'%calendar-cancelButton': 'Отменить',
		'%calendar-previousMonth': 'Предыдущий месяц: ',
		'%calendar-nextMonth': 'Следующий месяц: ',
		/* Slideout */
		'%show-toc': 'Показать',
		'%show-text': 'Показать оглавление',
		'%hide-text': 'Скрыть оглавление',
		'%table-contents': 'оглавление',
		/* Lightbox */
		'%lb-current': 'Пункт {current} из {total}',
		'%lb-next': 'Следующий пункт',
		'%lb-prev': 'Предыдущий пункт',
		'%lb-xhr-error': 'Этот контент не удалось загрузить.',
		'%lb-img-error': 'Это изображение не удалось загрузить.',
		'%lb-slideshow': 'Слайд-шоу',
		/* jQuery Mobile */
		'%jqm-expand': 'щелкните, чтобы развернуть содержимое',
		'%jqm-collapse': 'щелкните, чтобы свернуть содержимое',
		'%jqm-clear-search': 'очистить поиск',
		'%jqm-filter': 'Фильтровать',
		'%jqm-tbl-col-toggle': 'Столбцы ...',
		/* Charts widget */
		'%table-mention': 'Таблица',
		'%table-following': 'График. Подробности в таблице ниже.',
		/* Session timeout */
		'%st-timeout-msg': 'Ваша сессия подходит к концу. Вы должны до #expireTime#, чтобы активировать кнопку "ОК" ниже, чтобы расширить сессии.',
		'%st-msgbox-title': 'Предупреждение сессия тайм-аут',
		'%st-already-timeout-msg': 'Извините сеанс уже истек. Пожалуйста, войдите снова.',
		/* Toggle details */
		'%td-toggle': 'Свернуть все',
		'%td-open': 'Развернуть все',
		'%td-close': 'Свернуть все',
		'%td-ttl-open': 'Развернуть все разделы содержания',
		'%td-ttl-close': 'Свернуть все разделы содержания',
		/* Table enhancement */
		'%sSortAscending': ': aктивировать для сортировке по возрастанию',
		'%sSortDescending': ': aктивировать для сортировки по убыванию',
		'%sEmptyTable': 'Не имеется никаких данных в таблице',
		'%sInfo': 'Показываю с _START_ по _END_ из _TOTAL_ записей',
		'%sInfoEmpty': 'Показываю с 0 по 0 из 0 записей',
		'%sInfoFiltered': '(фильтруется от _MAX_ Всего записей)',
		'%sInfoThousands': ',',
		'%sLengthMenu': 'Показать _MENU_ записей',
		/* Geomap */
		'%geo-mapcontrol': 'Привязка аэроснимков к карте',
		'%geo-zoomin': 'Приблизить',
		'%geo-zoomout': 'Отдалить',
		'%geo-zoomworld': 'Увеличить для сопоставления степени',
		'%geo-zoomfeature': 'Увеличение до элемента',
		'%geo-scaleline': 'масштаб карты',
		'%geo-mouseposition': 'Широту и долготу курсора мыши',
		'%geo-ariamap': 'Карта объектов. Описание функций карты приведены в таблице ниже.',
		'%geo-accessibilize': '<strong>Клавиатура пользователей:</strong> Когда карта находится в фокусе, используйте клавиши со стрелками для перемещения по карте и плюс и минус ключи, чтобы увеличить. Стрелками не будет перемещения по карте при увеличении на карту степени.',
		'%geo-accessibilizetitle': 'Инструкция: Карта навигации',
		'%geo-togglelayer': 'Включить показ слоя',
		'%geo-hiddenlayer': 'Этот слой скрыт.',
		'%geo-basemapurl': 'http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg',
		'%geo-basemaptitle': 'BaseMaps_CBMT3978',
		'%geo-basemapurltxt': 'http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg',
		'%geo-attributionlink': 'http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en',
		'%geo-attributiontitle': 'GeoGratis - Канада базовой карты (на английском или французском языке)',
		'%geo-select': 'Выбирать',
		'%geo-labelselect': 'Проверьте, чтобы выбрать элемент на карте',
		/* Disable/enable PE */
		'%pe-disable': 'Базовая версия HTML',
		'%pe-enable': 'Стандартная версия'
	};
	_pe.document.trigger('languageloaded');
	window.pe = _pe;
	return _pe;
}());
/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: RU (Russian; русский язык)
 */
(function ($) {
	$.extend($.validator.messages, {
		required: "Это поле необходимо заполнить.",
		remote: "Пожалуйста, введите правильное значение.",
		email: "Пожалуйста, введите корректный адрес электронной почты.",
		url: "Пожалуйста, введите корректный URL.",
		date: "Пожалуйста, введите корректную дату.",
		dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
		number: "Пожалуйста, введите число.",
		digits: "Пожалуйста, вводите только цифры.",
		creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
		equalTo: "Пожалуйста, введите такое же значение ещё раз.",
		accept: "Пожалуйста, выберите файл с правильным расширением.",
		maxlength: $.validator.format("Пожалуйста, введите не больше {0} символов."),
		minlength: $.validator.format("Пожалуйста, введите не меньше {0} символов."),
		rangelength: $.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
		range: $.validator.format("Пожалуйста, введите число от {0} до {1}."),
		max: $.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
		min: $.validator.format("Пожалуйста, введите число, большее или равное {0}.")
	});
}(jQuery));