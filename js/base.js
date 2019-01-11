
(function (w) {
    var MMB = function () {



    }

    // 静态属性,用来获取当前根域名:端口
    MMB.domain = "http://127.0.0.1:9090";

    /**
     * 注意:此方法是静态方法,直接使用构造函数来调用,无须实例化.
     * URL解码方法为:decodeURI
     * 从URL中获取指定key的值,如http://xxxx?name=bulin,传入key,输出bulin
     * @param {*} key 参数:字符串
     * @returns JSON格式
     */
    MMB.getUrlParam = function (key) {
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return decodeURI(r[2]); return null; //返回参数值
    }

    /**
      * 用来获取首页菜单栏数据
      * @param {*} 无
      * @returns JSON格式
      */
    MMB.prototype.getIndexMenu = function () {
        return axios(`${MMB.domain}/api/getindexmenu`).then(res => {
            return res.data;
            console.log(res);
        })
    }


    /**
      * 用来获取折扣商品的列表信息
      * @param {*} 无
      * @returns JSON格式
      */
    MMB.prototype.getMoneyCtrl = function () {
        return axios(`${MMB.domain}/api/getmoneyctrl`).then(res => {
            return res.data;
            console.log(res);
        })
    }

    w.MMB = MMB;
})(window);