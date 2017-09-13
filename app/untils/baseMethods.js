/**
 * Created by luwenwe on 2017/9/13.
 */
var baseMethods = {
    selectCallBack:function(model,value) {
        this.dataTableConfig.loadDataParams[model] = value;
        this.search();
    },

    dateRangeChange:function (dateRange,noReq) {
        this.dataTableConfig.loadDataParams.begin_time = +new Date(dateRange.begin_time);
        this.dataTableConfig.loadDataParams.end_time = +new Date(dateRange.end_time);
        if(dateRange.dateRangeName == "自定义") return;
        if(noReq) return;
        this.search();
    },/*日期查询范围改变*/

    search:function () {
        if(!this.$dataTable){
        console.debug("$dataTable is not exist");
        return;
        }
        this.$dataTable.loadFirstPage();
    },

    searchChange:function (e) {
        this.dataTableConfig.loadDataParams.search = e.target.value;
    },

    inputEnter:function(e) {
        if(e.keyCode === 13) {
            this.search();
        }
    },/*enter搜索*/

    create:function() {
        this.$editModalForm.create({enabled:true});
    },

    edit:function(record) {
        this.$editModalForm.edit(record);
    },

    saveFormCallBack:function(res,type) {
        console.log(res)
    }
}

export default baseMethods;