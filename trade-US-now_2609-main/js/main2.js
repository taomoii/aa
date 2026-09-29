// ========= vue版 slick function ==============================================================================================================================
var slickFunction = {
    data() {
        return {
            bannerList: [
                {
                    title: '活動A',
                    img: 'images/icon-1.svg',
                    link: 'https://www.kgi.com.tw/'
                },
                {
                    title: '活動B',
                    img: 'images/icon-1.svg',
                    link: 'https://www.kgi.com.tw/'
                },
                {
                    title: '活動C',
                    img: 'images/icon-1.svg',
                    link: 'https://www.kgi.com.tw/'
                },
                {
                    title: '活動D',
                    img: 'images/icon-1.svg',
                    link: 'https://www.kgi.com.tw/'
                },
                {
                    title: '活動E',
                    img: 'images/icon-1.svg',
                    link: 'https://www.kgi.com.tw/'
                }
            ],
            slickOptions: {
				slidesToShow: 3,
				slidesToScroll: 1,
                autoplay: true,
                pauseOnHover: false,
                infinite: true,
                autoplaySpeed: 5000,
				speed: 500,
				adaptiveHeight: true,
                dots: true,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
				],
            },
            slickOptions2: {
				slidesToShow: 4,
				slidesToScroll: 4,
                autoplay: true,
                pauseOnHover: false,
                // dots: true,
                infinite: true,
                autoplaySpeed: 5000,
				speed: 500,
				adaptiveHeight: true,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
				],
            },
            slickOptions3: {
				slidesToShow: 1,
				slidesToScroll: 1,
                autoplay: true,
                pauseOnHover: false,
                // dots: true,
                infinite: true,
                autoplaySpeed: 5000,
				speed: 500,
				adaptiveHeight: true,
            },
            slickOptions4: {
				slidesToShow: 1,
				slidesToScroll: 1,
                autoplay: true,
                pauseOnHover: false,
                // dots: true,
                infinite: true,
                autoplaySpeed: 5000,
				speed: 500,
				adaptiveHeight: true,
            },
        };
    },
    methods: {
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },

        // Events listeners
        handleAfterChange(event, slick, currentSlide) {
            // console.log('handleAfterChange', event, slick, currentSlide);
        },
        handleBeforeChange(event, slick, currentSlide, nextSlide) {
            // console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
        },
        handleBreakpoint(event, slick, breakpoint) {
            // console.log('handleBreakpoint', event, slick, breakpoint);
        },
        handleDestroy(event, slick) {
            // console.log('handleDestroy', event, slick);
        },
        handleEdge(event, slick, direction) {
            // console.log('handleEdge', event, slick, direction);
        },
        handleInit(event, slick) {
            // console.log('handleInit', event, slick);
        },
        handleReInit(event, slick) {
            // console.log('handleReInit', event, slick);
        },
        handleSetPosition(event, slick) {
            // console.log('handleSetPosition', event, slick);
        },
        handleSwipe(event, slick, direction) {
            // console.log('handleSwipe', event, slick, direction);
        },
        handleLazyLoaded(event, slick, image, imageSource) {
            // console.log('handleLazyLoaded', event, slick, image, imageSource);
        },
        handleLazeLoadError(event, slick, image, imageSource) {
            // console.log('handleLazeLoadError', event, slick, image, imageSource);
        },
    },
};

// ========= app ==============================================================================================================================
const app = Vue.createApp({
    mixins: [slickFunction],
    data(){
        return{
            name: "凱基證券",
            screenWidth: document.body.clientWidth,
            screenHeight: document.body.clientHeight,
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            thisPath: location.protocol + "//" + location.host,
            menuBtnActive: false,
            navbarShow: false,
            activeNumber: 0,
            headerSmallTypeToggle: false,

            tabIndex: 0,
            tabIndex2: 0,
            tabIndex3: 0,
            tabIndex4: 1,
            subTabIndex: 0,
            qa: [false, false, false],
            notice: false,


            //-------------如果需要串stock區塊就需要以下
            stockList_4_etf: [
                {
                    tag: '股票(大型股)',
                    code: 'SPY',
                    tit: 'SPDR 標普500 ETF',
                    info: '美股指數ETF，覆蓋標普500公司，適合分散投資及長期增值策略。',
                },
                {
                    tag: '股票(小型股)',
                    code: 'IJR',
                    tit: 'iShares安碩核心標普小型股ETF',
                    info: '小型股ETF，多元投資組合，成長潛力大。',
                },
                {
                    tag: '股票(成長型)',
                    code: 'QQQ',
                    tit: '景順QQQ信託系列1',
                    info: '納指100 ETF，科技成長動能強，創新驅動。',
                },
                {
                    tag: '債券',
                    code: 'BND',
                    tit: '領航總債券市場ETF',
                    info: '美國投資等級債券ETF，多做為避險與利率策略操作。',
                },
                {
                    tag: '黃金',
                    code: 'GLD',
                    tit: 'SPDR金ETF',
                    info: '黃金擁有抗通膨特性，其與股市的低相關性成為分散投資風險的重要標的。',
                },
                {
                    tag: '科技',
                    code: 'VGT',
                    tit: '領航資訊科技ETF',
                    info: '投資於大型科技公司，涵蓋雲端運算、軟體與半導體產業，穩定性高。',
                },
                {
                    tag: '科技',
                    code: 'XLK',
                    tit: 'SPDR科技選擇板塊ETF',
                    info: '聚焦於科技領域龍頭公司，包含軟體、硬體與IT服務公司，具有市場領導力，波動性低。',
                },
                {
                    tag: '科技',
                    code: 'SMH',
                    tit: 'VanEck半導體ETF',
                    info: '主要投資於全球半導體製造商，受惠於晶片需求增長，具有成長潛力。',
                },
                {
                    tag: '科技',
                    code: 'IYW',
                    tit: 'iShares安碩美國科技ETF',
                    info: '涵蓋多元科技公司，包括軟體、網路與硬體設備供應商，適合分散風險的科技投資組合。',
                },
                {
                    tag: '科技',
                    code: 'SOXX',
                    tit: 'iShares安碩半導體 ETF',
                    info: '聚焦半導體產業龍頭企業，隨著AI、5G與物聯網需求增加，管理費用低，流動性佳。',
                },
            ],
            stockList_4_stocks: [
                {
                    code: 'NVDA',
                    tit: '輝達',
                    info: 'AI與圖形運算領域的先驅，專注於遊戲、數據中心及高效能計算技術，推動整體行業發展。'
                },
                {
                    code: 'AAPL',
                    tit: '蘋果',
                    info: '全球科技領導品牌，以創新設計、電子設備及軟硬體生態系統整合聞名。'
                },
                {
                    code: 'MSFT',
                    tit: '微軟',
                    info: '軟體與雲服務的全球巨擘，專注於提升生產力，提供企業解決方案與操作系統的全方位支援。'
                },
                {
                    code: 'AMZN',
                    tit: '亞馬遜',
                    info: '全球最大的網際網路線上零售商之一，並拓展經營雲端運算與平台服務，跨足AI領域發展。'
                },
                {
                    code: 'AVGO',
                    tit: '博通',
                    info: '美國通訊晶片大廠，專注設計、開發與供應半導體及基礎設施軟體等相關解決方案。'
                },
                {
                    code: 'GOOGL',
                    tit: 'Alphabet公司',
                    info: '全球最大的網路搜尋引擎母公司，亦提供地圖、行動作業系統等相關軟體應用服務。'
                },
                {
                    code: 'META',
                    tit: 'META平台',
                    info: '社群網路服務龍頭之一，並著力開發虛擬實境與擴增實境業務。'
                },
                {
                    code: 'TSLA',
                    tit: '特斯拉',
                    info: '美國最大的電動汽車及太陽能板公司，並持續成為全球自動駕駛車輛的領導廠商。'
                },
                {
                    code: 'LLY',
                    tit: '禮來',
                    info: '來自美國的跨國製藥公司，主要業務為研發、製造各種領域的醫藥產品。'
                },
                {
                    code: 'BRK/B',
                    tit: '波克夏·海瑟威',
                    info: '股神巴菲特建立的龐大且多元化的控股公司，以其長期投資價值和穩健的財務狀況聞名。'
                },
            ],
            stockList_0: [
                {
                    tag: '股票(大型股)',
                    code: 'SPY',
                    tit: 'SPDR 標普500 ETF',
                    info: '美股指數ETF，覆蓋標普500公司，適合分散投資及長期增值策略。',
                },
                {
                    tag: '股票(小型股)',
                    code: 'IJR',
                    tit: 'iShares安碩核心標普小型股ETF',
                    info: '小型股ETF，多元投資組合，成長潛力大。',
                },
                {
                    tag: '股票(成長型)',
                    code: 'QQQ',
                    tit: '景順QQQ信託系列1',
                    info: '納指100 ETF，科技成長動能強，創新驅動。',
                },
                {
                    tag: '債券',
                    code: 'BND',
                    tit: '領航總債券市場ETF',
                    info: '美國投資等級債券ETF，多做為避險與利率策略操作。',
                },
                {
                    tag: '黃金',
                    code: 'GLD',
                    tit: 'SPDR金ETF',
                    info: '黃金擁有抗通膨特性，其與股市的低相關性成為分散投資風險的重要標的。',
                },
            ],
            stockList_1: [
                {
                    code: 'VOO',
                    tit: 'Vanguard 標普500指數基金',
                    info: '投資美國500強企業，穩健成長首選。',
                },
                {
                    code: 'QQQ',
                    tit: '景順QQQ信託系列1',
                    info: '聚焦納斯達克100，科技創新動力強勁。',
                },
                {
                    code: 'SPY',
                    tit: 'SPDR 標普500 ETF',
                    info: '全球最大ETF，追蹤美國股市核心指數。',
                },
                {
                    code: 'VT',
                    tit: 'Vanguard 全球股票ETF',
                    info: '覆蓋全球市場，分散投資首選標的。',
                },
                {
                    code: 'VTI',
                    tit: 'Vanguard 全市場股票ETF',
                    info: '涵蓋美國全市場，追求整體成長收益。',
                },
            ],
            stockList_2: [
                {
                    code: 'VGT',
                    tit: '領航資訊科技ETF',
                    info: '投資於大型科技公司，涵蓋雲端運算、軟體與半導體產業，穩定性高。',
                },
                {
                    code: 'XLK',
                    tit: 'SPDR科技選擇板塊ETF',
                    info: '聚焦於科技領域龍頭公司，包含軟體、硬體與IT服務公司，具有市場領導力，波動性低。',
                },
                {
                    code: 'SMH',
                    tit: 'VanEck半導體ETF',
                    info: '主要投資於全球半導體製造商，受惠於晶片需求增長，具有成長潛力。',
                },
                {
                    code: 'IYW',
                    tit: 'iShares安碩美國科技ETF',
                    info: '涵蓋多元科技公司，包括軟體、網路與硬體設備供應商，適合分散風險的科技投資組合。',
                },
                {
                    code: 'SOXX',
                    tit: 'iShares安碩半導體 ETF',
                    info: '聚焦半導體產業龍頭企業，隨著AI、5G與物聯網需求增加，管理費用低，流動性佳。',
                },
            ],
            stockList_3: [
                {
                    code: 'CHAT',
                    tit: 'Roundhill生成式人工智慧與科技主動型ETF',
                    info: '以對話式AI為主，涵蓋語音助手與客服機器人，適合企業數位轉型需求。',
                },
                {
                    code: 'AIQ',
                    tit: 'Global X 人工智慧與科技ETF',
                    info: '尋求投資於在其產品和服務中進一步開發和利用人工智慧（AI）科技的公司，以及那些為使用AI分析大數據提供硬體便利的公司。',
                },
                {
                    code: 'BOTZ',
                    tit: 'Global X 機器人與人工智慧ETF',
                    info: '專注於投資於機器人技術和人工智慧領域的資訊科技股。',
                },
                {
                    code: 'ROBO',
                    tit: 'Robo全球機器人與自動化ETF',
                    info: '該ETF使用多重因子計算方法加權主要持有美國資訊科技與工業公司的股份。',
                },
                {
                    code: 'QTUM',
                    tit: 'Defiance 量子計算與機器學習ETF',
                    info: '該指數投資於其產品或服務主要與量子計算和機器學習技術的發展聯繫。',
                },
            ],

            notice1: false,
            notice2: false,

            eventInfo: false,





        };
    },
    components: {
        // fund: httpVueLoader(
        //     "js/fund.vue"
        // ),
    },
    mounted() {
        this.signature();
        this.addNoOpener();
        // this.useJq();
        this.showTarget();
        this.topBtn();
        // this.scrollMagic();
        this.getQueryStringToNext();
        this.headerSmallType();

        // this.sameHeight("notSureWhatItIs2-item-bg");
        // setTimeout(() => {
        //     this.sameHeight('notSureWhatItIs2-item-bg');
        // }, 1000);

        $(window).resize(() => {
            this.windowWidth = $(window).innerWidth();
            this.windowHeight = $(window).innerHeight();

            // this.sameHeight('notSureWhatItIs2-item-bg');
        });

        // this.countToNumber1($('.assets1Num'), 1.5, '', 2500);
        // this.countToNumber2($('.assets2Num'), 1500000000000, '', 2500);
        // this.getPosSetCountToNumber();

        // window.addEventListener('mousemove', e => {
        //     this.setMoneyPos();
        // });
        // window.addEventListener('deviceorientation', e => {
        //     this.setMoneyPos2();
        // });

        // setInterval(() => {
        //     this.tab1.push('tab1')
        // }, 2000)

        // this.countUp();

        // AOS
        this.$nextTick(function () {
            AOS.init({
                duration: 1000,
                // offset: this.windowWidth > 768 ? 400 : 200,
                delay: 100,
                once: true,
            });
        });
    },
    methods:{
        signature() {
            console.log(
                "%cMade by Captain%c2024/01%cVue3",
                "color: #fff; border-radius: 5px; background: #1a4f9c; padding: 2px 10px; font-weight: bold;",
                "color: #000; border-radius: 5px; background: #ffde00; padding: 2px 10px; margin: 0px 5px;",
                "color: #fff; border-radius: 5px; background: #42b883; padding: 2px 10px; margin: 0px 5px;"
            );
        },
        toggleModal(name) {
            this.$refs[name].toggle = !this.$refs[name].toggle;
        },
        sameHeight(name) {
            let item = $("." + name),
                itemLeight = item.length,
                giftItemHeight = [];

            item.removeAttr("style");

            for (let n = 0; n < itemLeight; n++) {
                giftItemHeight[n] = item.eq(n).innerHeight();
            }
            let height = Math.max.apply(null, giftItemHeight);
            item.css("height", height);
        },
        addNoOpener() {
            // 資安用  target="_blank" 加 rel="nofollow me noopener noreferrer"
            var _linkHasTargetBlank = $('a[target="_blank"]');
            for (var n = 0; n < _linkHasTargetBlank.length; n++) {
                // 如果要連的網址跟這網站網域不同  加[rel="nofollow me noopener noreferrer"]
                _linkHasTargetBlank.eq(n).attr("href").indexOf(this.thisPath)
                    ? _linkHasTargetBlank
                          .eq(n)
                          .attr("rel", "nofollow me noopener noreferrer")
                    : "";
            }
        },
        showTarget() {
            // 抓網址參數判斷要馬上顯示的區塊
            var url = location.href,
                i,
                openInfo = "";

            if (url.indexOf("?") != -1) {
                // 抓取網址參數判斷 --- Start
                function getUrlParams(url) {
                    // 回傳網址參數Object
                    var params = {};
                    (url + "?")
                        .split("?")[1]
                        .split("&")
                        .forEach(function (pair) {
                            pair = (pair + "=")
                                .split("=")
                                .map(decodeURIComponent);
                            if (pair[0].length) {
                                params[pair[0]] = pair[1];
                            }
                        });
                    return params;
                }

                var obj = getUrlParams(location.href);
                // 因為#hash會直接串在最後一個參數後面, 故需要取代處理
                if (Object.keys(obj).length && obj.hasOwnProperty("openInfo"))
                    openInfo =
                        obj.openInfo.indexOf("#") > -1
                            ? obj.openInfo.replace(location.hash, "")
                            : obj.openInfo;
                // 抓取網址參數判斷 --- End

                // 2020-11-26 Jeffery 修正openInfo空值在jQuery的錯誤
                if (openInfo && $("#" + openInfo).length > 0) {
                    setTimeout(() => {
                        var targetOffset = $("#" + openInfo).offset().top;
                        window.scrollTo(0, targetOffset);
                        console.log(openInfo, targetOffset);
                    }, 500);
                    // setTimeout(()=>{
                    // 	this.$scrollTo('#' + openInfo);
                    // }, 500)
                }
                /*
                    例 /index.html?openInfo=q1
                */
            }
        },
        topBtn() {
            $(window)
                .bind("scroll resize", function () {
                    var $this = $(this);
                    var $this_Top = $this.scrollTop();

                    //當高度小於100時，關閉區塊
                    if ($this_Top < 100) {
                        $(".topBtn").stop().css({
                            transform: "matrix(1, 0, 0, 1, 0, 400)",
                            opacity: 0,
                        });
                    }
                    if ($this_Top > 100) {
                        $(".topBtn").stop().css({
                            transform: "matrix(1, 0, 0, 1, 0, 0)",
                            opacity: 1,
                        });
                    }
                })
                .scroll();
        },
        toThousands(num) {
            // 錢加逗號
            return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, `$1,`);
        },
        delHtmlTag(info) {
            // 剔除htmlCode 只留文字
            String.prototype.stripHTML = function () {
                var reTag = /<(?:.|\s)*?>/g;
                return this.replace(reTag, "");
            };
            return info.stripHTML();
        },
        countUp() {
            // 數字遞增動畫
            let domPos = document.getElementById("crownArea").offsetTop;

            var options={
                useEasing: true,  // 過渡動畫效果，默認ture
                useGrouping: true,  // 千分位效果，例：1000->1,000。默認true
                separator: ',',   // 使用千分位時分割符號
                decimal: '.',   // 小數位分割符號
                prefix: '',    // 前置符號
                suffix: ''    // 後置符號，可漢字
            }

            // dom節點, 初始值,  結束值, 小數位數, 過渡幾秒 , 初始參數
            var num1 = new CountUp('num1', 0, 1.4, 1, 5, options);
            var num2 = new CountUp('num2', 0, 75, 0, 5, options);
            var num3 = new CountUp('num3', 0, 284, 0, 5, options);

            $(window).scroll(function () {
                var scrollVal = $(this).scrollTop();
                if (scrollVal >= domPos) {
                    num1.start();
                    num2.start();
                    num3.start();
                }
            });
        },
        headerSmallType() {
            // 小型導覽列功能
            // 監聽捲動事件
            window.addEventListener('scroll', () => {
            // 確認是否已經捲動超過一個螢幕高度
            if (window.scrollY >= this.windowHeight) {
                // 將 class 添加到目標元素
                this.headerSmallTypeToggle = true;
            } else {
                // 滾回一個螢幕高度上方時移除 class
                this.headerSmallTypeToggle = false;
            }
            });
        },

        //-------------------------------------網頁載入後將網址後的參數加到href中，如果href本來就有參數，就把參數也加上去
        getQueryStringToNext() {
            window.onload = function() {
                var query = window.location.search.slice(1);
                var links = document.querySelectorAll("a:not(.dontAddString)");
            
                if(query != '') {
                    for (var i = 0; i < links.length; i++) {
                        var hrefValue = links[i].getAttribute("href");
                
                        if (hrefValue && !hrefValue.startsWith("#") && !hrefValue.startsWith("javascript:")) {
                            if (hrefValue.includes("?")) {
                                // 如果 href 包含問號，將問號後的參數合併到目前網頁的參數後面
                                var hrefParts = hrefValue.split("?");
                                links[i].setAttribute(String.fromCharCode(104, 114, 101, 102), hrefParts[0] + "?" + query + "&" + hrefParts[1]);
                                // console.log('1');
                            }else {
                                links[i].setAttribute(String.fromCharCode(104, 114, 101, 102), hrefValue + "?" + query);
                                // console.log('3');
                            }
                        }
                    }
                }
            };
        },

        //-------------------------------------navbar
        toggleMobileNavbar() {
            this.menuBtnActive === false
                ? (this.menuBtnActive = true)
                : (this.menuBtnActive = false);
            this.navbarShow === false
                ? (this.navbarShow = true)
                : (this.navbarShow = false);
        },
        hideMobileNavbar() {
            this.menuBtnActive = false;
            this.navbarShow = false;
        },
        navClick(no, hashName) {
            this.navbarShow = false;
        },

        //-------------------------------------使用jq區塊
        useJq() {
            
        },

        //-------------------------------------scrollMagic
        scrollMagic() {
            // // init controller
            // let controller = new ScrollMagic.Controller(),
            //     bannerTit = new TimelineMax();
            // // howToPickTimeLine = new TimelineMax(),

            // new ScrollMagic.Scene({
            //     triggerElement: ".banner",
            //     duration: 400,
            //     // offset: 0,
            // })
            //     .setTween(bannerTit)
            //     // .addIndicators({name: "1 (duration: 0)"})
            //     .addTo(controller);

            // bannerTit.add(
            //     TweenMax.from(".banner-tit-sTit", 5, {
            //         x: 50,
            //         y: -80,
            //     })
            // );
            TweenMax.from(".banner-kv", 1, {
                // rotationY: '180deg',
                opacity: 0,
                rotationZ: '-720deg',
                scale: 0
            });
            TweenMax.from(".banner-tit img", 1, {
                opacity: 0,
                rotationX: '270deg',
                // x: -200,
                scale: 0,
                delay: 0.4
            });
        },
    },
    watch: {
        screenWidth(val) {
            this.screenWidth = val;
        },
        screenHeight(val) {
            this.screenHeight = val;
        },
        windowWidth(val) {
            this.windowWidth = val;
        },
        windowHeight(val) {
            this.windowHeight = val;
        },
    },
});

// ========= 燈箱 ==============================================================================================================================
app.component("modal", {
    props: ["canClose"],
    data: function () {
        return {
            toggle: false,
            isFixedHeight: false,
        };
    },
    template: ` <transition name="modal">
					<div class="modal" v-if="toggle">
						<div class="modal-bg" @click="closeModal()" v-if="canClose == true"></div>
						<div class="modal-bg" v-if="canClose == false"></div>
						<div class="modal-container" :class="{fixedHeight: isFixedHeight}" ref="modalContainer" id="modalContainer">
							<div class="modal-close closeBtn" @click="closeModal()" v-if="canClose == true">
								<span class="material-symbols-outlined">close</span>
							</div>
							<div class="modal-container-infoArea">
								<slot name="info"></slot>
							</div>
						</div>
					</div>
				</transition>`,
    methods: {
        closeModal() {
            this.toggle = false;
        },
    },
});

// ========= vue版 slick ==============================================================================================================================
app.component("slick", {
    props: {
        options: {
            type: Object,
            default: function () {
                return {};
            },
        },
    },
    mounted() {
        this.create();
    },
    destroyed: function () {
        $(this.$el).slick("unslick");
    },
    methods: {
        create: function () {
            const $slick = $(this.$el);
            $slick.on("after-change", this.onAfterChange);
            $slick.on("before-change", this.onBeforeChange);
            $slick.on("breakpoint", this.onBreakpoint);
            $slick.on("destroy", this.onDestroy);
            $slick.on("edge", this.onEdge);
            $slick.on("init", this.onInit);
            $slick.on("reInit", this.onReInit);
            $slick.on("set-position", this.onSetPosition);
            $slick.on("swipe", this.onSwipe);
            $slick.on("lazyLoaded", this.onLazyLoaded);
            $slick.on("lazyLoadError", this.onLazyLoadError);
            $slick.slick(this.options);
        },
        destroy: function () {
            const $slick = $(this.$el);
            $slick.off("after-change", this.onAfterChange);
            $slick.off("before-change", this.onBeforeChange);
            $slick.off("breakpoint", this.onBreakpoint);
            $slick.off("destroy", this.onDestroy);
            $slick.off("edge", this.onEdge);
            $slick.off("init", this.onInit);
            $slick.off("reInit", this.onReInit);
            $slick.off("set-position", this.onSetPosition);
            $slick.off("swipe", this.onSwipe);
            $slick.off("lazyLoaded", this.onLazyLoaded);
            $slick.off("lazyLoadError", this.onLazyLoadError);
            $(this.$el).slick("unslick");
        },
        reSlick: function () {
            this.destroy();
            this.create();
        },
        next: function () {
            $(this.$el).slick("slickNext");
        },
        prev: function () {
            $(this.$el).slick("slickPrev");
        },
        pause: function () {
            $(this.$el).slick("slickPause");
        },
        play: function () {
            $(this.$el).slick("slickPlay");
        },
        goTo: function (index, dontAnimate) {
            $(this.$el).slick("slickGoTo", index, dontAnimate);
        },
        currentSlide: function () {
            return $(this.$el).slick("slickCurrentSlide");
        },
        add: function (element, index, addBefore) {
            $(this.$el).slick("slickAdd", element, index, addBefore);
        },
        remove: function (index, removeBefore) {
            $(this.$el).slick("slickRemove", index, removeBefore);
        },
        filter: function (filterData) {
            $(this.$el).slick("slickFilter", filterData);
        },
        unfilter: function () {
            $(this.$el).slick("slickUnfilter");
        },
        getOption: function (option) {
            $(this.$el).slick("slickGetOption", option);
        },
        setOption: function (option, value, refresh) {
            $(this.$el).slick("slickSetOption", option, value, refresh);
        },
        setPosition: function () {
            $(this.$el).slick("set-position");
        },
        // Events
        onAfterChange: function (event, slick, currentSlide) {
            this.$emit("after-change", event, slick, currentSlide);
        },
        onBeforeChange: function (event, slick, currentSlide, nextSlide) {
            this.$emit("before-change", event, slick, currentSlide, nextSlide);
        },
        onBreakpoint: function (event, slick, breakpoint) {
            this.$emit("breakpoint", event, slick, breakpoint);
        },
        onDestroy: function (event, slick) {
            this.$emit("destroy", event, slick);
        },
        onEdge: function (event, slick, direction) {
            this.$emit("edge", event, slick, direction);
        },
        onInit: function (event, slick) {
            this.$emit("init", event, slick);
        },
        onReInit: function (event, slick) {
            this.$emit("reInit", event, slick);
        },
        onSetPosition: function (event, slick) {
            this.$emit("set-position", event, slick);
        },
        onSwipe: function (event, slick, direction) {
            this.$emit("swipe", event, slick, direction);
        },
        onLazyLoaded: function (event, slick, image, imageSource) {
            this.$emit("lazyLoaded", event, slick, image, imageSource);
        },
        onLazyLoadError: function (event, slick, image, imageSource) {
            this.$emit("lazyLoadError", event, slick, image, imageSource);
        },
    },
    template: ` <div>
                    <slot></slot>
                </div>`,
});

// ========= 社群分享 ==============================================================================================================================
app.component('shareLink', {
    data: function () {
        return {
            pageUrl: window.location.href,
            pageTitle: document.title,
        };
    },
    template: ` <div class="shareLink">
                    <ul class="shareLink-list">
                        <li>
                            分享<span v-if="$root.windowWidth < 992">：</span>
                        </li>
                        <li>
                            <a href="javascript:void(0)" title="複製網址" @click="copyUrl()">
                                <span class="material-symbols-outlined">file_copy</span>
                            </a>
                        </li>
                        <li>
                            <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + pageUrl" title="分享到Facebook" target="_blank" class="dontAddString">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
                            </a>
                        </li>
                        <li>
                            <a :href="'http://line.naver.jp/R/msg/text/?' + pageTitle + ' ' + pageUrl" title="分享到LINE" target="_blank" class="dontAddString">
                                <svg class="lineIconSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M311 196.8v81.3c0 2.1-1.6 3.7-3.7 3.7h-13c-1.3 0-2.4-.7-3-1.5l-37.3-50.3v48.2c0 2.1-1.6 3.7-3.7 3.7h-13c-2.1 0-3.7-1.6-3.7-3.7V196.9c0-2.1 1.6-3.7 3.7-3.7h12.9c1.1 0 2.4 .6 3 1.6l37.3 50.3V196.9c0-2.1 1.6-3.7 3.7-3.7h13c2.1-.1 3.8 1.6 3.8 3.5zm-93.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 2.1 1.6 3.7 3.7 3.7h13c2.1 0 3.7-1.6 3.7-3.7V196.8c0-1.9-1.6-3.7-3.7-3.7zm-31.4 68.1H150.3V196.8c0-2.1-1.6-3.7-3.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 1 .3 1.8 1 2.5c.7 .6 1.5 1 2.5 1h52.2c2.1 0 3.7-1.6 3.7-3.7v-13c0-1.9-1.6-3.7-3.5-3.7zm193.7-68.1H327.3c-1.9 0-3.7 1.6-3.7 3.7v81.3c0 1.9 1.6 3.7 3.7 3.7h52.2c2.1 0 3.7-1.6 3.7-3.7V265c0-2.1-1.6-3.7-3.7-3.7H344V247.7h35.5c2.1 0 3.7-1.6 3.7-3.7V230.9c0-2.1-1.6-3.7-3.7-3.7H344V213.5h35.5c2.1 0 3.7-1.6 3.7-3.7v-13c-.1-1.9-1.7-3.7-3.7-3.7zM512 93.4V419.4c-.1 51.2-42.1 92.7-93.4 92.6H92.6C41.4 511.9-.1 469.8 0 418.6V92.6C.1 41.4 42.2-.1 93.4 0H419.4c51.2 .1 92.7 42.1 92.6 93.4zM441.6 233.5c0-83.4-83.7-151.3-186.4-151.3s-186.4 67.9-186.4 151.3c0 74.7 66.3 137.4 155.9 149.3c21.8 4.7 19.3 12.7 14.4 42.1c-.8 4.7-3.8 18.4 16.1 10.1s107.3-63.2 146.5-108.2c27-29.7 39.9-59.8 39.9-93.1z"/></svg>
                            </a>
                        </li>
                    </ul>
                </div>`,
    methods: {
        //-------------------------------------複製網址
        copyUrl() {
            var temp = $('<input>'); // 建立input物件
            $('body').append(temp); // 將input物件增加到body
            var url = window.location.href; // 取得要複製的連結
            temp.val(url).select(); // 將連結加到input物件value
            document.execCommand('copy'); // 複製
            temp.remove(); // 移除input物件

            this.$root.toggleModal('copyUrlSuccess');
        }
    },
});


// =========================
// 自動產 FAQ Schema（FAQPage）
// =========================

(function () {
  function buildFaqSchema() {
    const qaItems = document.querySelectorAll(".qa-list");
    if (!qaItems || qaItems.length === 0) return false;

    const faqEntities = [];

    qaItems.forEach((item) => {
      const questionEl = item.querySelector(".qa-list-tit");
      const answerEl = item.querySelector(".qa-list-content");
      if (!questionEl || !answerEl) return;

      const questionText = questionEl.textContent.trim().replace(/^Q\s*[:：.]\s*/, "");
      const answerHtml = answerEl.innerHTML.trim();

      faqEntities.push({
        "@type": "Question",
        name: questionText,
        acceptedAnswer: {
          "@type": "Answer",
          text: answerEl.textContent.trim().replace(/\s+/g, " ")
        },
      });
    });

    const faqJson = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqEntities,
    };

    let script = document.getElementById("ld-faq");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "ld-faq";
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(faqJson);

    console.log("✅ FAQ Schema 已自動生成：", faqJson);
    return true;
  }

  function waitForQaThenBuild() {
    if (buildFaqSchema()) return;
    const obs = new MutationObserver(() => {
      if (buildFaqSchema()) obs.disconnect();
    });
    obs.observe(document.body, { childList: true, subtree: true });
    setTimeout(() => obs.disconnect(), 3000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", waitForQaThenBuild);
  } else {
    waitForQaThenBuild();
  }
  window.KGI_buildFaqSchema = buildFaqSchema;
})();




app.mount('#app');