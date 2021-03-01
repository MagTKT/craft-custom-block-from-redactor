(function($R)
{
    $R.add('plugin', 'customblock', {
        translations: {
            en: {
                "customblock": "My Plugin custom",
            }
        },
        init: function(app)
        {
            // define app
            this.app = app;
            // define services
            this.lang = app.lang;
            this.toolbar = app.toolbar;
        },
        start: function()
        {
            // create dropdown object
            var dropdownData = {
                item1: {
                    title: 'method 1',
                    api: 'plugin.customblock.method1'
                },
                item2: {
                    title: 'method 2',
                    api: 'plugin.customblock.method2'
                },
                item3: {
                    title: 'method 3',
                    api: 'plugin.customblock.method3'
                },
                item4: {
                    title: 'method 4',
                    api: 'plugin.customblock.method4'
                },
                item5: {
                    title: 'method 5',
                    api: 'plugin.customblock.method5'
                },
            };

            var buttonData = {
                title: this.lang.get('image')
            };
            
            var $button = this.toolbar.addButton('customblock', buttonData);
            $button.setIcon('<i class="re-icon-widget"></i>');

            var dropdown = $button.setDropdown(dropdownData);
        },
        method1: function()
        {
            var new_div = document.createElement('div');
            new_div.className = "img-gabarit img-full-width-height-fixed";
            var new_img = document.createElement('img');
            new_div.appendChild(new_img);
            $(".redactor-styles").append(new_div);
        },
        method2: function()
        {   
            // this.app.api('module.upload.build', options);
            // var options = {
            //     url: 'path-to-server-side',
            //     name: 'uploadimage',
            //     data: {}              
            // };
            // console.log(options)
            var new_div = document.createElement('div');
            new_div.className = "img-gabarit img-3-cols grid grid-cols-2 gap-x-5 gap-y-20 md:grid-cols-3";
            var new_img = document.createElement('img');
            new_div.appendChild(new_img);
            $(".redactor-styles").append(new_div);
        },
        method3: function()
        {
            var new_div = document.createElement('div');
            new_div.className = "img-gabarit img-2-cols grid grid-cols-2 gap-x-5";
            var new_img = document.createElement('img');
            new_div.appendChild(new_img);
            $(".redactor-styles").append(new_div);
        },
        method4: function()
        {
            var new_div = document.createElement('div');
            new_div.className = "img-gabarit img-full-width height-auto";
            var new_img = document.createElement('img');
            new_div.appendChild(new_img);
            $(".redactor-styles").append(new_div);
        },
        method5: function()
        {
            var new_div = document.createElement('div');
            new_div.className = "img-gabarit img-full-height";
            var new_img = document.createElement('img');
            new_div.appendChild(new_img);
            $(".redactor-styles").append(new_div);
        }, 
    });
    
})(Redactor);
