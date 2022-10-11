function getMsg(text) {
    $.ajax({
        method: 'get',
        url: 'http://ajax.frontend.itheima.net:3006/api/robot',
        data: {
            spoken: text
        },
        success: function (res) {
            // console.log(res);
            if (res.message === 'success') {
                var msg = res.data.info.text
                $('#talk_list').append('<li class="left_word"><img src = "img/person01.png" /> <span>' + msg + '</span></li >')

            }
        }
    })
}