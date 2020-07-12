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
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- Scripts -->
    <script>
        window.Laravel = <?php echo json_encode([
                'apiBaseUri' => '/api',
                'csrfToken' => csrf_token(),
                'environment' => App::environment(),
                'url' => config('app.url'),
                'site_name' => config('app.name', 'Assist'),
                'data' => [
                    'abuserRelationshipTypes' => config('lists.abuser_relationship_types'),
                    'abuseTypes' => config('lists.abuse_types'),
                    'advocates' => \App\Advocate::all(['id', 'first_name', 'last_name', 'email']),
                    'authUser' => new \App\Http\Resources\Advocate(Auth::user()),
                    'ethnicity' => \App\Ethnicity::all(['id', 'name']),
                    'eyeColors' => config('lists.eye_colors'),
                    'fundingSources' => \App\FundingSource::all(['id', 'name']),
                    'hairColors' => config('lists.hair_colors'),
                    'hairLengths' => config('lists.hair_lengths'),
                    'housingStatuses' => config('lists.housing_statuses'),
                    'genders' => \App\Gender::all(['id', 'name']),
                    'incidentTypes' => \App\IncidentType::all(['id', 'name']),
                    'phoneTypes' => config('lists.phone_types'),
                    'serviceNotProvidedReasons' => config('lists.service_not_provided_reasons'),
                    'referralSources' => \App\ReferralSource::all(['id', 'name']),
//                    'relationshipTypes' => \App\ClientRelationshipType::all(['id', 'name']),
                    'services' => \App\Service::all(['id', 'name', 'description']),
                    'states' => \App\State::all(['id', 'name'])
                ],
        ]); ?>
    </script>
</head>

<body class="fixed skin-purple sidebar-mini">
<div id="app" class="wrapper">
    <!-- Main Header -->
    <header class="main-header">


        <!-- Header Navbar -->
        <nav class="navbar navbar-static-top" role="navigation">
            <!-- Sidebar toggle button-->
            <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                <span class="sr-only">Toggle navigation</span>
            </a>

            <!-- Logo -->
            <a href="/" class="logo">
                <b>{{ config('app.name') }}</b>
            </a>

            <!-- Navbar Right Menu -->
            <ul class="nav navbar-nav navbar-right user-menu">
                @if(Auth::user())
                <!-- User Account Menu -->
                    <li class="dropdown">
                        <!-- Menu Toggle Button -->
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <i class="fas fa-user-circle"></i><span class="hidden-sm hidden-xs"> @{{ authUser.first_name }} @{{ authUser.last_name }}</span> <i class="fas fa-caret-down"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="{!! url('/logout') !!}"
                                   onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                    Sign out
                                </a>
                                <form id="logout-form" action="{{ url('/logout') }}" method="POST" style="display: none;">
                                    {{ csrf_field() }}
                                </form>
                            </li>
                        </ul>
                    </li>
                @endif
            </ul>
        </nav>
    </header>

    <aside class="main-sidebar" id="sidebar-wrapper">

        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
            <!-- search form (Optional) -->
            <form action="#" method="get" class="sidebar-form">
                {{--<suggestive-search></suggestive-search>--}}
            </form>
            <!-- Sidebar Menu -->
            <sidebar-menu></sidebar-menu>
            <!-- /.sidebar-menu -->
        </section>
        <!-- /.sidebar -->
    </aside>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- include flash messages -->
        <messages :messages="messages"></messages>

        <!-- Breadcrumbs -->
        {{--<breadcrumbs></breadcrumbs>--}}

        @yield('content')
    </div>

    <!-- Main Footer -->
    <footer class="main-footer" style="max-height: 100px;text-align: center">
        <strong>Built using <a href="#">Assist</a></strong>, an open-source client management and reporting tool.
    </footer>

</div>

<!-- Scripts -->
<script src="{{ mix('/js/manifest.js') }}"></script>
<script src="{{ mix('/js/vendor.js') }}"></script>
<script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>
