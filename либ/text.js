const moment = require('moment-timezone');
const menu = (prefix, pushname) => {
	let p = 0
	return ` *ПОМОЩНИК*

*ПРИВЕТ* ${pushname}, ДОБРОЕ ВРЕМЯ СУТОК! :)
\
*🪀 ВЛАДЕЛЕЦ* : @${configs.ownerList[0].split('@')[0]}
*Prefix* : .


*КОМАНДЫ ДЛЯ АДМИНИСТРАТОРОВ*
*${p+=1}.* ${prefix}группа _открыть|закрыть_
*${p+=1}.* ${prefix}приветствие _on|off_
*${p+=1}.* ${prefix}обьявление _текст_
*${p+=1}.* ${prefix}датьадмина _@_
*${p+=1}.* ${prefix}снятьадмина _@_
*${p+=1}.* ${prefix}удалить _@_
*${p+=1}.* ${prefix}добавить _номер без +_
*${p+=1}.* ${prefix}внимание
*${p+=1}.* ${prefix}сброситьссылку
*${p+=1}.* ${prefix}антиссылка

*ВНИМАНИЕ!!! УБЕДИТЕЛЬНАЯ ПРОСЬБА!!! ЗАПОЛНЯТЬ КОМАНДЫ НА КИРИЛИЦЕ*

*НАПРИМЕР:* музыка ruki verh student

*ЗАГРУЗКИ*
*${p+=1}.* ${prefix}музыка _НАЗВАНИЕ_
*${p+=1}.* ${prefix}видео _НАЗВАНИЕ_
*${p+=1}.* ${prefix}ytmp3 _ССЫЛКА_
*${p+=1}.* ${prefix}ytmp4 _ССЫЛКА_

*КОМАНДЫ ДЛЯ СТИКЕРОВ*
*${p+=1}.* ${prefix}стиксподписью _название_стика|автор_
*${p+=1}.* ${prefix}огненыйстик
*${p+=1}.* ${prefix}стикер
*${p+=1}.* ${prefix}стикерреверс
*${p+=1}.* ${prefix}стикерменю

*ВНИМАНИЕ!!! УБЕДИТЕЛЬНАЯ ПРОСЬБА!!! ЗАПОЛНЯТЬ КОМАНДЫ НА КИРИЛИЦЕ*

*НАПРИМЕР:* музыка ruki verh student

*СОЗДАНИЕ ИЗОБРАЖЕНИЙ*
*${p+=1}.* ${prefix}розыск _text1|text2|text3|@tag_
*${p+=1}.* ${prefix}календарь _выбрать_изображение / @
*${p+=1}.* ${prefix}рисунок _выбирите изображение / @
*${p+=1}.* ${prefix}рисунок2 _выбирите изображение / @


*КОМАНДЫ ДЛЯ ВЛАДЕЛЬЦА*
*${p+=1}.* ${prefix}block _@tag_
*${p+=1}.* ${prefix}unblock _@tag_
*${p+=1}.* ${prefix}addvn _replyAudio/vn_
*${p+=1}.* ${prefix}delvn _name_
*${p+=1}.* ${prefix}premium add _@_
*${p+=1}.* ${prefix}premium del _@_
*${p+=1}.* ${prefix}premium list
*${p+=1}.* ${prefix}clearall
*${p+=1}.* ${prefix}сброситьлимит
*${p+=1}.* ${prefix}личный
*${p+=1}.* ${prefix}публичный
`
}

const ingfo = `Этот бот сделан на языке программирования Node.js / JavaScript
Исходный код бота : https://OK GOOOOOOGLE оно тебе ненужно
В случае возникновения ошибки вы можете связаться с владельцем бота, набрав! Owner

Спасибо за внимание!
`

const listCode = `Kode bahasa jgviy tidak ada\n  Code       Bahasa\n    sq        Albanian\n    ar        Arabic\n    hy        Armenian\n    ca        Catalan\n    zh        Chinese\n    zh-cn     Chinese (China)\n    zh-tw     Chinese (Taiwan)\n    zh-yue    Chinese (Cantonese)\n    hr        Croatian\n    cs        Czech\n    da        Danish\n    nl        Dutch\n    en        English\n    en-au     English (Australia)\n    en-uk     English (United Kingdom)\n    en-us     English (United States)\n    eo        Esperanto\n    fi        Finnish\n    fr        French\n    de        German\n    el        Greek\n    ht        Haitian Creole\n    hi        Hindi\n    hu        Hungarian\n    is        Icelandic\n    id        Indonesian\n    it        Italian\n    ja        Japanese\n    ko        Korean\n    la        Latin\n    lv        Latvian\n    mk        Macedonian\n    no        Norwegian\n    pl        Polish\n    pt        Portuguese\n    pt-br     Portuguese (Brazil)\n    ro        Romanian\n    ru        Russian\n    sr        Serbian\n    sk        Slovak\n    es        Spanish\n    es-es     Spanish (Spain)\n    es-us     Spanish (United States)\n    sw        Swahili\n    sv        Swedish\n    ta        Tamil\n    th        Thai\n    tr        Turkish\n    vi        Vietnamese\n    cy        Welsh\n    `

const mess = {
             wait: 'Минуточку, пожалуйста',
			 group: 'эту команду можно использовать только в группах!',
			 admin: 'может использоваться только администратором!',
			 botAdmin: 'эту команду можно использовать, только если бот является администратором группы',
			 limit: 'Срок действия вашего лимита истек, \n\nПримечание: лимит будет сбрасываться каждый раз В 2.00 По МСК',
			 ownerOnly: 'Эта команда только для владельца!'
}

module.exports = {
	menu,
	listCode,
	mess
}
