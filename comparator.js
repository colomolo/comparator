$(function() {
  'use strict';

  function Comparator($el) {
    this.$el = $el;

    this.$blocks = this.$el.children('img');
    this.$leftImg = this.$blocks.eq(0);
    this.$rightImg = this.$blocks.eq(1);

    this.init();
    this.setListeners();
  }

  Comparator.prototype.init = function() {
    this.$leftImg.wrap('<div class="comparator-left"></div>');
    this.$rightImg.wrap('<div class="comparator-right"></div>');
    this.$leftSide = this.$leftImg.closest('.comparator-left');
    this.$rightSide = this.$rightImg.closest('.comparator-right');

    this.calculateSizes();
  }

  Comparator.prototype.calculateSizes = function() {
    this.width = this.$el.width();
    this.$rightImg.css('width', this.width);
  }

  Comparator.prototype.setListeners = function() {
    var comparator = this;

    $(window).resize(function() {
      comparator.calculateSizes();
    });

    comparator.$el.on('mousemove', function (e) {
      comparator.moveDivider(e);
    });

    if (this.$el.data('return')) {
      comparator.$el.on('mouseleave', function () {
        comparator.centerDivider();
      });
    }
  }

  Comparator.prototype.moveDivider = function(e) {
    var mouseX = Math.round(this.getRelativeMouseX(e));

    this.$rightSide.removeClass('centered');
    this.$rightSide.css('width', mouseX);
  }

  Comparator.prototype.centerDivider = function() {
    var center = this.width / 2;

    this.$rightSide.addClass('centered');
    this.$rightSide.css('width', center);
  }

  Comparator.prototype.getRelativeMouseX = function(e) {
    return Math.min(this.$el.offset().left + this.width - e.clientX, this.width);
  }

  $('.comparator').each(function() {
    new Comparator($(this));
  });
});
