/**
 * Created by luwenwei on 16/6/5.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.UploadFile = factory());
}(this,function () {
    function UiPagination(totalPage, targetElement) {
        this.targetElement = null;
        this.configure = null;
        this.targetElement = $(targetElement);//目标节点
        this.totalPage = totalPage || 1;
        this.currentPage = 1;
        this.etc = '<li class="not_allow"><a class="not_allow etc">...</a></li>';
        this.paginationHead = '<ul style="margin-top:0;margin-bottom: 0;" class="pagination ui_pagination"><li class=""><a class="previous allow">&laquo;</a></li>';
    }

    UiPagination.prototype = {
        init: function () {
            this.state = null;
            if (this.totalPage <= 7) {
                this.sevenPage();
            } else {
                this.exceedSevenPage();
            }
            this.setActivePage();
            this.pageBindClick();
            if (this.currentPage != 1) this.gotoPage(this.currentPage);
        },

        setInputGoPage: function () {
            return '<span class="input-go-page"><input class="text-page form-control" value="' + this.currentPage + '"><button class="btn-go-page">Go</button></span>'
        },

        setActivePage: function () {
            var self = this;
            var page_li = this.targetElement.find("li");
            page_li.removeClass("active");
            page_li.each(function (index, item) {
                if ($(item).find("a").attr("current-page") == self.currentPage) {
                    $(item).addClass("active");
                    return;
                }
            })
        },

        sevenPage: function () {
            if (this.state === "sevenPage") return;
            this.paginationMain = this.paginationHead;
            for (var i = 1; i <= this.totalPage; i++) {
                this.paginationMain += "<li><a class='allow' current-page='" + i + "'>" + i + "</a></li>";
            }
            this.paginationMain += '<li><a class="next allow">&raquo;</a></li></ul>';
            this.paginationMain += this.setInputGoPage();
            $(this.targetElement).empty();
            $(this.targetElement).append($(this.paginationMain));
            this.state = "sevenPage";
        },

        exceedSevenPage: function () {
            this.paginationMain = this.paginationHead;
            for (var i = 1; i <= 6; i++) {
                this.paginationMain += "<li><a class='allow' current-page='" + i + "'>" + i + "</a></li>";
            }
            this.paginationMain += this.etc;
            this.paginationMain += "<li><a class='allow' current-page='" + this.totalPage + "'>" + this.totalPage + "</a></li>";
            this.paginationMain += '<li><a class="next allow">&raquo;</a></li></ul>';
            this.paginationMain += this.setInputGoPage();
            $(this.targetElement).empty();
            $(this.targetElement).append($(this.paginationMain));
            this.state = "exceedSevenPage";
        },

        middlePage: function () {
            var previousPage = this.currentPage - 1, nextPage = this.currentPage + 1;
            if (this.state === "middlePage") {
                var prev_previous_page = this.middleCurrentPage - 1, next_next_page = this.middleCurrentPage + 1;
                var next_page_a = this.targetElement.find("a[current-page=" + next_next_page + "]");
                var previous_page_a = this.targetElement.find("a[current-page=" + prev_previous_page + "]");
                var current_page_a = this.targetElement.find("a[current-page=" + this.middleCurrentPage + "]");
                next_page_a.attr("current-page", nextPage).text(nextPage);
                previous_page_a.attr("current-page", previousPage).text(previousPage);
                current_page_a.attr("current-page", this.currentPage).text(this.currentPage)
                this.middleCurrentPage = this.currentPage;
                return;
            }
            this.paginationMain = this.paginationHead;
            this.paginationMain += "<li><a class='allow' current-page='1'>1</a></li>";
            this.paginationMain += this.etc;
            this.paginationMain += "<li><a class='allow' current-page='" + previousPage + "'>" + previousPage + "</a></li>";
            this.paginationMain += "<li><a class='allow' current-page='" + this.currentPage + "'>" + this.currentPage + "</a></li>";
            this.paginationMain += "<li><a class='allow' current-page='" + nextPage + "'>" + nextPage + "</a></li>";
            this.paginationMain += this.etc;
            this.paginationMain += "<li><a class='allow' current-page='" + this.totalPage + "'>" + this.totalPage + "</a></li>";
            this.paginationMain += '<li><a class="next allow">&raquo;</a></li></ul>';
            this.paginationMain += this.setInputGoPage();
            $(this.targetElement).empty();
            $(this.targetElement).append($(this.paginationMain));
            this.state = "middlePage";
            this.middleCurrentPage = this.currentPage;
        },

        backPage: function () {
            if (this.state === "backPage") return;
            this.paginationMain = this.paginationHead;
            this.paginationMain += "<li><a class='allow' current-page='1'>1</a></li>";
            this.paginationMain += this.etc;
            for (var i = this.totalPage - 5; i <= this.totalPage; i++) {
                this.paginationMain += "<li><a class='allow' current-page='" + i + "'>" + i + "</a></li>";
            }
            this.paginationMain += '<li><a class="next allow">&raquo;</a></li></ul>';
            this.paginationMain += this.setInputGoPage();
            $(this.targetElement).empty();
            $(this.targetElement).append($(this.paginationMain));
            this.state = "backPage";
        },

        setPagination: function () {
            var totalPage = this.totalPage || 1;
            if (totalPage <= 7) {
                this.sevenPage();
            } else {
                this.exceedSevenPage();
            }
        },


        pageBindClick: function () {
            var self = this;
            this.targetElement.unbind();
            this.targetElement.bind("click", function (event) {
                var page;
                if ($(event.target).hasClass("not_allow")) return;
                if ($(event.target).hasClass("previous")) {
                    if (self.currentPage == 1) return;//如果是第一页则禁止向前翻页
                    page = self.currentPage - 1;
                } else if ($(event.target).hasClass("next")) {
                    if (self.currentPage == self.totalPage) return;//如果是最后一页则禁止向后翻页
                    page = self.currentPage + 1;
                } else if ($(event.target).hasClass("allow")) {
                    page = $(event.target).attr("current-page");
                } else if ($(event.target).hasClass("btn-go-page")) {
                    var inputGoPage = $(self.targetElement).find(".text-page");
                    page = inputGoPage.val();
                    if (!page || page > self.totalPage || page <= 0 || isNaN(Number(page)) || parseInt(page) != parseFloat(page)) return;
                } else {
                    return;
                }
                if (parseInt(page) == self.currentPage) return;
                self.gotoPage(parseInt(page))
            });
        },

        gotoPage: function (currentPage) {
            this.targetElement.trigger("gotoPage", [currentPage]);
            this.currentPage = currentPage;
            if (currentPage <= 4) {
                this.setPagination();
            }
            if (4 < currentPage && currentPage < this.totalPage - 4) {
                this.middlePage()
            }
            if (4 < currentPage && currentPage >= this.totalPage - 4 && this.totalPage > 7) {
                this.backPage()
            }
            this.setActivePage();
            this.targetElement.find(".text-page").val(currentPage)
            return;
        }
    };

    return UiPagination;
}))