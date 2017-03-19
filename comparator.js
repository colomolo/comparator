$(function() {
  'use strict';

  const CENTERED_CLASS = 'comparator-centered';
  const DEFAULT_ORIENTATION = 'comparator-vertical';

  function Comparator($el) {
    this.$el = $el;
    this.orientation = DEFAULT_ORIENTATION;

    this.$blocks = this.$el.children('img');
    this.$firstImg = this.$blocks.eq(0);
    this.$secondImg = this.$blocks.eq(1);
    
    this.offsets = {
      top: this.$el.offset().top,
      left: this.$el.offset().left,
    };

    this.construct();
    this.calcSizes();
    this.centerDivider();
    this.setListeners();
  }

  Comparator.prototype.construct = function() {
    if (this.$el.data('orientation') === 'vertical') {
      this.orientation = 'comparator-vertical';
    } else if (this.$el.data('orientation') === 'horizontal') {
      this.orientation = 'comparator-horizontal';
    }

    this.$el.addClass(this.orientation);

    this.$firstImg.wrap('<div class="comparator-first"></div>');
    this.$secondImg.wrap('<div class="comparator-second"></div>');

    this.$firstSide = this.$firstImg.closest('.comparator-first');
    this.$secondSide = this.$secondImg.closest('.comparator-second');
  }

  Comparator.prototype.calcSizes = function() {
    this.width = this.$el.width();
    this.height = this.$el.height();
    this.$secondImg.css({'width': this.width});
  }

  Comparator.prototype.setListeners = function() {
    $(window).resize(() => {
      this.calcSizes();
    });

    this.$el.on('mousemove', (e) => {
      this.moveDivider(e);
    });

    if (this.$el.data('return')) {
      this.$el.on('mouseleave', () => {
        this.centerDivider();
      });
    }
  }

  Comparator.prototype.moveDivider = function(e) {
    const mousePosition = {
      x: Math.round(this.width - (e.clientX - this.offsets.left)),
      y: Math.round(this.height - (e.clientY - this.offsets.top)),
    };

    this.$secondSide.removeClass(CENTERED_CLASS);
    this.$secondSide.css('width', mousePosition.x);
  }

  Comparator.prototype.centerDivider = function() {
    const center = this.width / 2;

    this.$secondSide.addClass(CENTERED_CLASS);
    this.$secondSide.css('width', center);
  }

  $('.comparator').each(function() {
    new Comparator($(this));
  });
});
