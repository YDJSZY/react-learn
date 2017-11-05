/**
 * Created by luwenwei on 17/11/4.
 */
export default class TableAction{
    constructor(modal) {
        this.modal = modal;
        this.modalElement = modal._reactInternalInstance._renderedComponent._hostNode;
    }
    
    create() {
        var record = this.beforeCreate();
        this.modal.open(record,this.modalElement,"create");
    }

    beforeCreate() {
        return {};
    }

    edit(record) {
        var record = this.beforeEdit(record);
        this.modal.open(record,this.modalElement,"edit");
    }

    beforeEdit(record) {
        return record;
    }
}