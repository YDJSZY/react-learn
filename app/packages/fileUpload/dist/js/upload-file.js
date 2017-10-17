/**
 * Created by Apple on 17/1/6.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
            (global.UploadFile = factory());
}(this,function () {
    var UploadFile = function (id,multiple) {
        this.fileTarget = document.getElementById(id);
        this.inputFile = document.createElement("input");
        this.inputFile.type = "file";
        this.inputFile.style.display = "none";
        this.fileTarget.setAttribute("class","upload-file");
        this.fileTarget.appendChild(this.inputFile);
        this.tip = document.createElement("span");
        this.tipOriginalContent = "请选择文件[可拖动文件至此]";
        this.tip.setAttribute("class","tip");
        this.tip.textContent = this.tipOriginalContent;
        this.removeFileEle = document.createElement("div");
        this.removeFileEle.setAttribute("class","remove-file");
        this.removeFileEle.textContent = "x";
        this.fileTarget.appendChild(this.removeFileEle);
        this.fileTarget.appendChild(this.tip);
        this.fileImg = document.createElement("img");
        this.fileImg.setAttribute("class","file-img");
        this.fileTarget.appendChild(this.fileImg);
        this.files = [];
        this.multiple = multiple;
        if(multiple){
            this.inputFile.multiple = "multiple";
        }
        this.render();
    };

    UploadFile.prototype.render = function () {
        var self = this;
        this.fileTarget.onclick = function () {
            self.inputFile.click();
        }

        this.fileTarget.addEventListener("change",selectFileCallBack,false)
        this.fileTarget.addEventListener("dragenter", dragenter, false);
        this.fileTarget.addEventListener("dragover", dragover, false);
        this.fileTarget.addEventListener("drop", drop, false);

        function dragenter(e) {
            e.stopPropagation();
            e.preventDefault();
        }

        function dragover(e) {
            e.stopPropagation();
            e.preventDefault();
        }

        function drop(e) {
            e.stopPropagation();
            e.preventDefault();
            var dt = e.dataTransfer;
            self.files = dt.files;
            selectFileCallBack()
        }

        function selectFileCallBack (files) {
            self.files = files && files.target.files.length>0 ? files.target.files : self.files;
            if(self.files.length==0) return;
            var tipContent;
            if(self.files[0].type.indexOf("image")==-1){/*不是图片*/
                if(self.files.length>1){
                    tipContent = "已选择"+self.files.length+"个文件";
                }else{
                    tipContent = self.files[0].name;
                    if(tipContent.length>30) tipContent = tipContent.substr(0,30)+"...";
                }
                self.tip.textContent = tipContent;
                self.fileImg.style.display = "none";
                self.tip.style.display = "block";
            }else{
                if(window.FileReader) {
                    var oFReader = new FileReader();
                    oFReader.onloadend = function(e) {
                        self.fileImg.style.display = "block";
                        self.fileImg.src = e.target.result;
                    };
                    oFReader.readAsDataURL(self.files[0]);
                    self.tip.style.display = "none";
                }
            }
            self.removeFileEle.style.display = "block";
        }

        this.removeFileEle.addEventListener("click",function (e){
            window.event? window.event.cancelBubble = true : e.stopPropagation();
            self.removeFile();
        },false)
    }

    UploadFile.prototype.removeFile = function () {
        if(!this.files.length) return;
        this.files = [];
        this.tip.textContent = this.tipOriginalContent;
        this.tip.style.display = "block";
        this.removeFileEle.style.display = "none";
        this.fileImg.style.display = "none";
        this.fileTarget.removeChild(this.inputFile)
        this.inputFile = document.createElement("input");
        this.inputFile.type = "file";
        if(this.multiple){
            this.inputFile.multiple = "multiple";
        }
        this.inputFile.style.display = "none";
        this.fileTarget.appendChild(this.inputFile);
    }

    UploadFile.prototype.createImg = function () {
        var img = document.createElement("img");
        img.setAttribute("class","file-img");
        return img;
    }

    UploadFile.prototype.getFiles = function () {
        return this.files;
    };

    return UploadFile;
}))
