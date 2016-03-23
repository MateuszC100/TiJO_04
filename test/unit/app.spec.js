describe('app', function () {
    'use strict';
    var app = window.app;

    xdescribe('Division function', function () {
        it('should divide number a by b', function () {
            expect(app.divide(10, 5)).toEqual(2);
            expect(app.divide(15, 3)).toEqual(5)
        });
        it('should divide number a by b only when a is more than 1 and less than 100', function () {
            expect(app.divide(20, 5)).toEqual(4);
        });
        it('should return false when a is less than 1', function () {
            expect(app.divide(-2, 6)).toEqual(false);
        });
        it('should return false when a is more than 100', function () {
            expect(app.divide(105, 3)).toEqual(false);
        });
        it('should divide number a by b when a is 1', function () {
            expect(app.divide(1, -1)).toEqual(-1);
        });
        it('should divide number a by b when a is 100', function () {
            expect(app.divide(100, 10)).toEqual(10);
        });
        it('should divide number a by b when a is 0', function () {
            expect(app.divide(0, 1)).toEqual(false);
        });
        it('should divide number a by b when a is 101', function () {
            expect(app.divide(101, 10)).toEqual(false);
        });
        it('should return false when b is grater than a', function () {
            expect(app.divide(101, 103)).toEqual(false);
        });
        it('should return false when b is equal 0', function () {
            expect(app.divide(101, 0)).toEqual(false);
        });
    });
    describe('getDescendingNumbers',function(){
        it('should return false when first argument is bigger than second argument',function(){
            expect(app.getDescendingNumbers(90,100)).toEqual(false);
        });
        it('should string of value between numberFor and numberTo when arguments of function numberFor is more than numberTo',function(){
            expect(app.getDescendingNumbers(12,10)).toEqual("12 11 10");
        });
    });

    xdescribe('areaofTrapezoid',function(){
        it('should return false when a<0',function(){
                expect(app.areaOfTrapezoid(-5,2,1)).toEqual(false);
            });
        it('should return false when b<0',function(){
            expect(app.areaOfTrapezoid(2,-8,2)).toEqual(false);
        });
        it('should return false when h<0',function(){
            expect(app.areaOfTrapezoid(2,5,-2)).toEqual(false);
        });

    });

    descibe('maxArray',function(){
        it('should return max number with array',function(){
            expect(app.maxArray([2,5,8,1])).toEqual(8);
        });

        it('should return false if array is empty',function(){
            expect(app.maxArray([])).toEqual(false);
        });
    });

    describe('squareOdd',function(){
        it('should return array number',function(){
           expect(app.squareOdd([1,3,5,7])).toEqual([1,9,25,49]);
        });
        it('should return false if array have even numbers',function(){
            expect(app.squareOdd([2,4,8])).toEqual(false);
        });
        it('should return false if array is empty',function(){
            expect(app.squareOdd([])).toEqual(false);
        });
    });



});
