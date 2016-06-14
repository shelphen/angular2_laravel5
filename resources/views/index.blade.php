<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

<!--         <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
-->        
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
</script>
        <base href="./">
        {{ Html::style('css/styles.css') }}
    <!-- Load libraries -->
    <!-- IE required polyfills, in this exact order -->
    {{ Html::script('es6-shim/es6-shim.min.js') }}
    {{ Html::script('zone.js/dist/zone.js') }}
    {{ Html::script('reflect-metadata/Reflect.js') }}
    {{ Html::script('systemjs/dist/system.src.js') }}
    {{ Html::script('systemjs.config.js') }}
    <script>
    System.config({
            "defaultJSExtensions": true,
            packages: {
                app: {
                    format: 'register',
                    defaultExtension: 'js'
                }            
            }
        });
      System.import('js/boot')
                .then(null, console.error.bind(console));
    </script>
    </head>
    <body>
        <div class="container">
            <div class="content">
                <my-app>Loading...</my-app>
                <!-- <div class="title">Laravel 5</div> -->
            </div>
        </div>
    </body>
</html>
