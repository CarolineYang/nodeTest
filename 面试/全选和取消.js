<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>demo</title>
    <script src="https://cdn.bootcss.com/vue/2.2.2/vue.min.js"></script>
    </head>
    <body>
    <div id="app">
    <p>
    全选：
</p>
<input type="checkbox" id="checkbox" v-model="checked" @click="changeAllChecked()">
    <label for="checkbox">
    {{checked}}
</label>
<p>
多个复选框：
</p>
<input type="checkbox" id="uuihoo" value="uuihoo" v-model="checkedNames">
    <label for="uuihoo">
    uuihoo
    </label>
    <input type="checkbox" id="google" value="Google" v-model="checkedNames">
    <label for="google">
    Google
    </label>
    <input type="checkbox" id="alibaba" value="alibaba" v-model="checkedNames">
    <label for="alibaba">
    taobao
    </label>
    <br>
    <span>
    选择的值为:{{checkedNames}}
</span>
</div>
<script>
new Vue({
    el: '#app',
    data: {
        checked: false,
        checkedNames: [],
        checkedArr: ["uuihoo", "alibaba", "Google"]
    },
    methods: {
        changeAllChecked: function() {
            if (this.checked) {
                this.checkedNames = this.checkedArr
            } else {
                this.checkedNames = []
            }
        }
    },
    watch: {
        "checkedNames": function() {
            if (this.checkedNames.length != this.checkedArr.length) {
                this.checked = false
            } else {
                this.checked = true
            }
        }
    }
})
</script>
</body>
</html>
