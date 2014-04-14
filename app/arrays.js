if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item)
    },

    sum : function(arr) {
        var total=0
        for (var i=0; i<arr.length; i++){
            total+=arr[i];
        }
        return total
    },

    remove : function(arr, item) {


        for( var i=0; i<arr.length; i++){
            if(arr[i]==item){
                arr.splice(i,1)
        }
    }
        return arr
    },

    removeWithoutCopy : function(arr, item) {
        for(var i=0; i<arr.length; i++ ){
            while(arr[i] ==item){
                arr.splice(i,1)
            }
        }

        return arr
    },

    append : function(arr, item) {
        arr.push(item)
        return arr

    },

    truncate : function(arr) {
        arr.pop()
        return arr

    },

    prepend : function(arr, item) {
        arr.splice(0,0,item);
        return arr

    },

    curtail : function(arr) {
        arr.shift()
        return arr

    },

    concat : function(arr1, arr2) {
        var newarr= arr1.concat(arr2)
        return newarr
    },

    insert : function(arr, item, index) {
        arr.splice(index,0, item )
        return arr;

    },


    count : function(arr, item) {
        var counter = 0
        for( var i=0; i < arr.length; i++){
            if (arr[i] ==item){
            counter ++;
            }
        }
        return counter
    },

    duplicates : function(arr) {
        var newarr =[];
        var sorted =arr.sort()
        for(var i = 0; i < arr.length; i++){
            if(sorted[i] == sorted[i+1] && newarr.indexOf(sorted[i]) == -1){
                newarr.push(sorted[i])
                }
            }
        return newarr
    },

    square : function(arr) {
        var newarr = []
        for(var i = 0; i < arr.length; i++){
            newarr.push(Math.pow(arr[i],2))
        }
        return newarr;
    },

    findAllOccurrences : function(arr, target) {

        var newarr = [];
        for(var i = 0; i < arr.length; i++){
            if (arr[i] == target){
            newarr.push(i)


            }
        }
        return newarr

    }
  };
});
