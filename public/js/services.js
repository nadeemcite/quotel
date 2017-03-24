app.service('QuotelService', function($http,$q) {
    return {
        getWindowDesigns: function(windowType) {
            /*
        return $http({
            url:'http://custom.quotel.in/welcome/fetch_design',
            method:'POST',
            headers:{
                'Content-Type':'x-www-form-urlencoded'
            },
            data:{
                'action':'design',
                'value':windowType
            }
        });
        */
            return $q(function(resolve, reject) {
                console.log(windowType)
                switch (windowType+"") {
                    case '2':
                        resolve({data:JSON.parse('[{"ID":"6","NAME":"Side Hung","window_type":"2","mesh":"0","image_file":"sh.jpg","detail":"Single Openable Design"},{"ID":"7","NAME":"Top Hung","window_type":"2","mesh":"0","image_file":"th.jpg","detail":"Top Hung Design"},{"ID":"8","NAME":"Open-Open","window_type":"2","mesh":"0","image_file":"oo.jpg","detail":"Both panel Open Design"},{"ID":"9","NAME":"Open-Fix","window_type":"2","mesh":"0","image_file":"of.jpg","detail":"One panel Open - One Panel Fix Design"},{"ID":"10","NAME":"Top-Hung-Fix","window_type":"2","mesh":"0","image_file":"thsf.jpg","detail":"One panel Top Hung Open - One Panel Fix Design"},{"ID":"11","NAME":"Open-Fix-Open","window_type":"2","mesh":"0","image_file":"ofo.jpg","detail":"Both Side Open & Center Fix Design"},{"ID":"12","NAME":"French window","window_type":"2","mesh":"0","image_file":"fly.jpg","detail":"Both panel Open Design with Fly Mullion"}]')});
                        break;
                    case '1':
                        resolve({data:JSON.parse('[{"ID":"1","NAME":"Fix","window_type":"1","mesh":"0","image_file":"fix.jpg","detail":"Fix Design"},{"ID":"2","NAME":"Fix - 2 Parts","window_type":"1","mesh":"0","image_file":"fix2.jpg","detail":"Fix Design in two parts"},{"ID":"3","NAME":"Fix - 3 Parts","window_type":"1","mesh":"0","image_file":"fix3.jpg","detail":"Fix Design in three parts"},{"ID":"4","NAME":"Fix - 4 Parts","window_type":"1","mesh":"0","image_file":"fix4.jpg","detail":"Fix Design in four parts"},{"ID":"5","NAME":"Fix - 6 Parts","window_type":"1","mesh":"0","image_file":"fix5.jpg","detail":"Fix Design in five parts"},{"ID":"20","NAME":"fix with exhaust","window_type":"1","mesh":"0","image_file":"fix6.jpg","detail":"fix with exhaust"}]')});
                        break;
                    case '3':
                        resolve({data:JSON.parse('[{"ID":"13","NAME":"2T-2P","window_type":"3","mesh":"1","image_file":"s.jpg","detail":"Both Panel Sliding Design "},{"ID":"14","NAME":"2T-2P - ONE FIX","window_type":"3","mesh":"1","image_file":"sf.jpg","detail":"One Panel Slide - One panel Fix"},{"ID":"15","NAME":"2T-3P centre Fix","window_type":"3","mesh":"1","image_file":"sfs.jpg","detail":"Both Side Panel Slide - Center 50% Fix"},{"ID":"16","NAME":"2T-3P one slide","window_type":"3","mesh":"1","image_file":"ffs.jpg","detail":"One Panel Slide | Side two panel Fix"},{"ID":"17","NAME":"2T-4P","window_type":"3","mesh":"1","image_file":"2t4p.jpg","detail":"Four panel | Center Sliding | both Side Fix"},{"ID":"18","NAME":"3T-3P","window_type":"3","mesh":"0","image_file":"3t3p.jpg","detail":"Three Panel Sliding "},{"ID":"19","NAME":"3T-6P","window_type":"3","mesh":"0","image_file":"3t6p.jpg","detail":"Six panel Sliding"}]')});
                        break;
                }
            });
        }
    }
});
