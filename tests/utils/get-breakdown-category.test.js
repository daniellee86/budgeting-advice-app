import getBreakdownCategory from '../../utils/get-breakdown-category'
import {breakdownCategories} from '../../data/breakdown-categories'

/**
 * check that we're getting the correct breakdown category
 * 
 * do a couple of tests for each just to make sure various figures throughout that match up, we could loop
 * and do loads but it's not necessary
 * 
 * low >= 0% < 30%
 * medium >= 31% < 60%
 * high >= 61% - 100%
 */

test('get low category - 0%', () => {
    expect(getBreakdownCategory(0,0,100).name).toBe(breakdownCategories[0].name); 
    // Categories are stored from low to high in breakdownCategories so index 0 is low, 1 medium, 2 high
});

test('get low category - 15%', () => {
    expect(getBreakdownCategory(15,0,100).name).toBe(breakdownCategories[0].name);
});

test('get low category - 29%', () => {
    expect(getBreakdownCategory(29,0,100).name).toBe(breakdownCategories[0].name);
});

test('get med category - 30%', () => {
    expect(getBreakdownCategory(30,0,100).name).toBe(breakdownCategories[1].name);
});

test('get med category - 51%', () => {
    expect(getBreakdownCategory(51,0,100).name).toBe(breakdownCategories[1].name);
});

test('get high category - 71%', () => {
    expect(getBreakdownCategory(71,0,100).name).toBe(breakdownCategories[2].name);
});

test('get high category - 100%', () => {
    expect(getBreakdownCategory(100,0,100).name).toBe(breakdownCategories[2].name);
});