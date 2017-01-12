$(function() {
  'use strict';

  function Comparator($el) {
    this.$el = $el;
    this.$right = this.$el.find('.comp-right');
    this.$rightImg =  this.$right.find('img');

    this.calculateSizes();
    this.setListeners();
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

    comparator.$el.on('mouseleave', function () {
      comparator.centerDivider();
    });
  }

  Comparator.prototype.moveDivider = function(e) {
    var mouseX = Math.round(this.getRelativeMouseX(e));

    this.$right.removeClass('centered');
    this.$right.css('width', mouseX);
  }

  Comparator.prototype.centerDivider = function() {
    var center = this.width / 2;

    this.$right.addClass('centered');
    this.$right.css('width', center);
  }

  Comparator.prototype.getRelativeMouseX = function(e) {
    return Math.min(this.$el.offset().left + this.width - e.clientX, this.width);
  }

  $('.comparator').each(function() {
    new Comparator($(this));
  });
});
