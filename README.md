# Bootstrap 4 Grid only and SASS with Gulp

How to only use a customized Bootstrap 4 Grid System using the SASS dependencies.

## Setup

After cloning this repository, run

    git submodule init
    git submodule update
    yarn
    gulp
    python -m http.server 8000

## Grid Configuration with Bootstrap Semantics

Configuring grid system before importing relevant grid imports is possible as variables are set to `!default`
in `_variables.scss`:

    $enable-flex: true;
    $enable-grid-classes: true;
    $grid-columns: 8;
    $grid-gutter-width-base: 60px;
    $grid-breakpoints: (
      xs: 0,
      sm: 480px,
      md: 768px,
      lg: 992px,
      xl: 1200px
    );

Import normalizing rules (`_reboot.scss`) and grid system (`_grid.scss`) from [bootstrap 4](https://github.com/twbs/bootstrap.git) submodule:

    @import '../bootstrap/scss/_variables.scss';
    @import '../bootstrap/scss/_mixins.scss';
    @import '../bootstrap/scss/_reboot.scss';
    @import '../bootstrap/scss/_grid.scss';

## Grid Configuration with Custom Semantics

Supposed you have a given layout class-semantic like for example

    <div class="content">
      <div class="row">
	<div class="content-primary">foo</div>
	<div class="content-secondary">bar</div>
      </div>
    </div>

then you can use bootstrap's mixins for creating a custom grid system:

    @import '../bootstrap/scss/_variables.scss';
    @import '../bootstrap/scss/_mixins.scss';
    @import '../bootstrap/scss/_reboot.scss';

    .content {
      @include make-container();
    }
    .row {
      @include make-row();
    }
    .content-primary {
      @include make-col-ready();
      @include make-col(8);
      @media (min-width: 480px) {
        @include make-col(5);
      }
    }
    .content-secondary {
      @include make-col-ready();
      @include make-col(8);
      @media (min-width: 480px) {
        @include make-col(3);
      }
    }

## Namespacing

In order to avoid naming conflicts, bootstrap can be namespaced:

    @import '../bootstrap/scss/_variables.scss';
    @import '../bootstrap/scss/_mixins.scss';
    @import '../bootstrap/scss/_reboot.scss';
    .my-namespace {
      @import '../bootstrap/scss/_grid.scss';
    }
