<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    {{--<meta name="viewport" content="width=device-width, initial-scale=1">--}}
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link href="/css/app.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- Scripts -->
    <script>
        window.Laravel = {!! json_encode([
                'apiBaseUri' => '/api',
                'csrfToken' => csrf_token(),
                'environment' => App::environment(),
                'url' => config('app.url'),
                'site_name' => config('app.name', 'Assist')
        ]); !!}
    </script>
</head>
<body class="skin-purple">
<div id="app">

    <!-- Content Wrapper. Contains page content -->
    <div>
        <div class="content">
            <!-- Logo -->
            <h1 class="text-center">
                {{ config('app.name') }}
            </h1>
            <!-- include flash messages -->
            @yield('content')
        </div>
    </div>

    <!-- Main Footer -->
    <footer style="max-height: 100px;text-align: center">
        <strong>Built using <a href="#">Assist</a></strong>, an open-source client management and reporting tool.
    </footer>

</div>

<!-- Scripts -->
{{--<script src="/js/app.js"></script>--}}
</body>
</html>
