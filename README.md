# Bootstrap 4 Grid only and SASS with Gulp

How to only use a customized Bootstrap 4 Grid System using the SASS dependencies.

## Setup

After cloning this repository, run

    git submodule init
    git submodule update
    yarn
    gulp
    python -m http.server 8000

## Grid Configuration

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

## Grid with Custom Semantics


