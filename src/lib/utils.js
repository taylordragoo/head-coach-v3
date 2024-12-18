export const sampleDataReduction = (data, option, show) => {
    let sampledData = [];
    let tempData = [];
    const dataLength = data.length;

    if (dataLength === 0) return sampledData;

    const timeUnits = {
        millisecond: 1,
        second: 1000,
        minute: 60 * 1000,
        hour: 60 * 60 * 1000,
        day: 24 * 60 * 60 * 1000,
        week: 7 * 24 * 60 * 60 * 1000,
        month: 30 * 24 * 60 * 60 * 1000,
        quarter: 90 * 24 * 60 * 60 * 1000,
        year: 365 * 24 * 60 * 60 * 1000
    };
    const selectedMultiplier = timeUnits[option];
    const endDate = new Date(data[dataLength - 1].x);
    const firstData = new Date(data[0].x);
    const calculatedDate = new Date(endDate.getTime() - show * selectedMultiplier);
    const startDate = firstData.getTime() > calculatedDate.getTime() ? firstData : calculatedDate;
    tempData = data.filter((item) => new Date(item.x) >= startDate);
    const tempLen = tempData.length;
    if (option === 'minute' || option === 'second' || option === 'millisecond') {
        if (tempLen < show) {
            const endDate = new Date(data[data.length - 1].x);
            const startDate = new Date(endDate);
            startDate.setHours(endDate.getHours() - 4);
            tempData = data.filter((item) => new Date(item.x) >= startDate);
        }
        return tempData;
    } else if (option === 'day' || option === 'hour') {
        return tempData;
    } else if (option === 'week' || option === 'month' || option === 'quarter' || option === 'year') {
        const sliceUnits = {
            week: 7,
            month: 30,
            quarter: 90,
            year: 365 / 2
        };
        const selectedSlicer = parseInt(sliceUnits[option]);
        for (let i = 0; i < tempLen; i += selectedSlicer) {
            const range = tempData.slice(i, i + selectedSlicer);
            const rangeAverage = range.reduce((sum, value) => sum + value.y, 0) / range.length;
            sampledData.push({ x: range[0].x, y: rangeAverage });
        }
        return sampledData;
    }
    return data;
};

export const sampleDataReductionByArray = (data, option, show) => {
    let sampledData = [];
    const dataLength = data.length;

    if (dataLength === 0) return sampledData;

    const timeUnits = {
        millisecond: 1,
        second: 1000,
        minute: 60 * 1000,
        hour: 60 * 60 * 1000,
        day: 24 * 60 * 60 * 1000,
        week: 7 * 24 * 60 * 60 * 1000,
        month: 30 * 24 * 60 * 60 * 1000,
        quarter: 90 * 24 * 60 * 60 * 1000,
        year: 365 * 24 * 60 * 60 * 1000
    };
    const selectedMultiplier = timeUnits[option];
    const endDate = new Date(data[dataLength - 1].x);
    const firstData = new Date(data[0].x);
    const calculatedDate = new Date(endDate.getTime() - show * selectedMultiplier);
    const startDate = firstData.getTime() > calculatedDate.getTime() ? firstData : calculatedDate;
    let tempData = data.filter((item) => new Date(item.x) >= startDate);
    const tempLen = tempData.length;

    if (option === 'minute' || option === 'second' || option === 'millisecond') {
        if (tempLen < show) {
            const endDate = new Date(data[data.length - 1].x);
            const startDate = new Date(endDate);
            startDate.setHours(endDate.getHours() - 4);
            tempData = data.filter((item) => new Date(item.x) >= startDate);
        }
        return tempData;
    } else if (option === 'day' || option === 'hour') {
        return tempData;
    } else if (option === 'week' || option === 'month' || option === 'quarter' || option === 'year') {
        const sliceUnits = {
            week: 7,
            month: 30,
            quarter: 90,
            year: 365 / 2
        };
        const selectedSlicer = parseInt(sliceUnits[option]);
        for (let i = 0; i < tempLen; i += selectedSlicer) {
            sampledData.push(tempData[i]);
        }
        return sampledData;
    }
    return data;
};

export const sampleDataByFixedLength = (data, option, show) => {
    let sampledData = [];
    const dataLength = data.length;

    if (dataLength === 0) return sampledData;

    const timeUnits = {
        millisecond: 'millisecond',
        second: 'second',
        minute: 'minute',
        hour: 'hour',
        day: 'day',
        week: 'week',
        month: 'month',
        quarter: 'quarter',
        year: 'year'
    };

    if (!timeUnits[option]) return data;

    const parseDate = (dateStr) => new Date(dateStr);

    const average = (arr) => {
        if (arr.length === 0) return 0;
        if (typeof arr[0] === 'number') {
            return arr.reduce((acc, val) => acc + val, 0) / arr.length;
        } else {
            const length = arr[0].length;

            const avgArr = [];
            Array(length)
                .fill(null)
                .forEach((_, i) => {
                    const val = arr.map((data) => Number(data[i])).reduce((acc, val) => acc + val, 0) / arr.length;
                    avgArr.push(val);
                });
            return avgArr;
        }
    };

    let tempData = [];
    let currentUnit = null;

    for (let i = dataLength - 1; i >= 0; i--) {
        const dataPoint = data[i];
        const date = parseDate(dataPoint.x);

        let unit = null;
        if (option === 'day') {
            unit = Math.floor(date.getTime() / (24 * 60 * 60 * 1000));
        } else if (option === 'week') {
            unit = Math.floor(date.getTime() / (7 * 24 * 60 * 60 * 1000));
        } else if (option === 'month') {
            unit = date.getFullYear() * 12 + date.getMonth();
        } else if (option === 'year') {
            unit = date.getFullYear();
        } else if (option === 'hour') {
            unit = Math.floor(date.getTime() / (60 * 60 * 1000));
        } else if (option === 'minute') {
            unit = Math.floor(date.getTime() / (60 * 1000));
        } else if (option === 'second') {
            unit = Math.floor(date.getTime() / 1000);
        } else if (option === 'millisecond') {
            unit = Math.floor(date.getTime() / 1);
        } else if (option === 'quarter') {
            unit = date.getFullYear() * 4 + Math.floor(date.getMonth() / 3);
        }

        if (currentUnit === null) {
            currentUnit = unit;
        }

        if (unit !== currentUnit) {
            const avgValues = average(tempData.map((item) => item.y));
            sampledData.unshift({ x: tempData[0].x, y: avgValues });
            tempData = [];
            currentUnit = unit;
        }

        tempData.push(dataPoint);

        if (sampledData.length >= show) {
            break;
        }
    }

    if (tempData.length > 0) {
        const avgValues = average(tempData.map((item) => item.y));
        sampledData.unshift({ x: tempData[0].x, y: avgValues });
    }
    if (['week', 'month', 'quarter'].includes(option)) {
        const days = {
            week: 7,
            month: 30,
            quarter: 90
        };
        const dayCn = 24 * 60 * 60 * 1000;
        if (new Date(sampledData[sampledData.length - 1].x).getTime() / dayCn - new Date(sampledData[sampledData.length - 2].x).getTime() / dayCn < days[option]) {
            sampledData.pop();
        } else {
            sampledData.shift();
        }
    }
    return sampledData;
};

export const generateRandomData = (startDate, endDate, intervalHours, minValue, maxValue) => {
    let data = [];
    let currentDate = new Date(startDate);
    const end = new Date(endDate);

    while (currentDate <= end) {
        const currentValue = minValue + Math.random() * (maxValue - minValue);

        data.push({ x: new Date(currentDate), y: parseFloat(currentValue.toFixed(2)) });

        currentDate = new Date(currentDate.getTime() + intervalHours * 60 * 60 * 1000);
    }

    return data;
};

export const generateRandomMultiData = (startDate, endDate, intervalHours, minValue, maxValue, datasetsCount = 2, inter = false) => {
    let data = [];
    let currentDate = new Date(startDate);
    const end = new Date(endDate);

    while (currentDate <= end) {
        let currentValues;
        if (inter) {
            let incr = maxValue;
            currentValues = Array(datasetsCount)
                .fill(null)
                .map((_, i) => {
                    return (minValue + Math.random() * (maxValue - minValue) + incr * (datasetsCount - i * 1.2)).toFixed(0);
                });
        } else {
            currentValues = Array(datasetsCount)
                .fill(null)
                .map(() => {
                    return (minValue + Math.random() * (maxValue - minValue)).toFixed(0);
                });
        }
        data.push({ x: new Date(currentDate), y: [...currentValues] });

        currentDate = new Date(currentDate.getTime() + intervalHours * 60 * 60 * 1000);
    }
    return data;
};

export const ObjectUtils = {
    equals(obj1, obj2, field) {
        if (field) return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);
        else return this.deepEquals(obj1, obj2);
    },

    deepEquals(a, b) {
        if (a === b) return true;

        if (a && b && typeof a == 'object' && typeof b == 'object') {
            var arrA = Array.isArray(a),
                arrB = Array.isArray(b),
                i,
                length,
                key;

            if (arrA && arrB) {
                length = a.length;
                if (length != b.length) return false;
                for (i = length; i-- !== 0;) if (!this.deepEquals(a[i], b[i])) return false;

                return true;
            }

            if (arrA != arrB) return false;

            var dateA = a instanceof Date,
                dateB = b instanceof Date;

            if (dateA != dateB) return false;
            if (dateA && dateB) return a.getTime() == b.getTime();

            var regexpA = a instanceof RegExp,
                regexpB = b instanceof RegExp;

            if (regexpA != regexpB) return false;
            if (regexpA && regexpB) return a.toString() == b.toString();

            var keys = Object.keys(a);

            length = keys.length;

            if (length !== Object.keys(b).length) return false;

            for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

            for (i = length; i-- !== 0;) {
                key = keys[i];
                if (!this.deepEquals(a[key], b[key])) return false;
            }

            return true;
        }

        return a !== a && b !== b;
    },

    resolveFieldData(data, field) {
        if (data && Object.keys(data).length && field) {
            if (this.isFunction(field)) {
                return field(data);
            } else if (field.indexOf('.') === -1) {
                return data[field];
            } else {
                let fields = field.split('.');
                let value = data;

                for (var i = 0, len = fields.length; i < len; ++i) {
                    if (value == null) {
                        return null;
                    }

                    value = value[fields[i]];
                }

                return value;
            }
        } else {
            return null;
        }
    },

    isFunction(obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    },

    getItemValue(obj, ...params) {
        return this.isFunction(obj) ? obj(...params) : obj;
    },

    filter(value, fields, filterValue) {
        var filteredItems = [];

        if (value) {
            for (let item of value) {
                for (let field of fields) {
                    if (String(this.resolveFieldData(item, field)).toLowerCase().indexOf(filterValue.toLowerCase()) > -1) {
                        filteredItems.push(item);
                        break;
                    }
                }
            }
        }

        return filteredItems;
    },

    reorderArray(value, from, to) {
        if (value && from !== to) {
            if (to >= value.length) {
                to %= value.length;
                from %= value.length;
            }

            value.splice(to, 0, value.splice(from, 1)[0]);
        }
    },

    findIndexInList(value, list) {
        let index = -1;

        if (list) {
            for (let i = 0; i < list.length; i++) {
                if (list[i] === value) {
                    index = i;
                    break;
                }
            }
        }

        return index;
    },

    contains(value, list) {
        if (value != null && list && list.length) {
            for (let val of list) {
                if (this.equals(value, val)) return true;
            }
        }

        return false;
    },

    insertIntoOrderedArray(item, index, arr, sourceArr) {
        if (arr.length > 0) {
            let injected = false;

            for (let i = 0; i < arr.length; i++) {
                let currentItemIndex = this.findIndexInList(arr[i], sourceArr);

                if (currentItemIndex > index) {
                    arr.splice(i, 0, item);
                    injected = true;
                    break;
                }
            }

            if (!injected) {
                arr.push(item);
            }
        } else {
            arr.push(item);
        }
    },

    removeAccents(str) {
        if (str && str.search(/[\xC0-\xFF]/g) > -1) {
            str = str
                .replace(/[\xC0-\xC5]/g, 'A')
                .replace(/[\xC6]/g, 'AE')
                .replace(/[\xC7]/g, 'C')
                .replace(/[\xC8-\xCB]/g, 'E')
                .replace(/[\xCC-\xCF]/g, 'I')
                .replace(/[\xD0]/g, 'D')
                .replace(/[\xD1]/g, 'N')
                .replace(/[\xD2-\xD6\xD8]/g, 'O')
                .replace(/[\xD9-\xDC]/g, 'U')
                .replace(/[\xDD]/g, 'Y')
                .replace(/[\xDE]/g, 'P')
                .replace(/[\xE0-\xE5]/g, 'a')
                .replace(/[\xE6]/g, 'ae')
                .replace(/[\xE7]/g, 'c')
                .replace(/[\xE8-\xEB]/g, 'e')
                .replace(/[\xEC-\xEF]/g, 'i')
                .replace(/[\xF1]/g, 'n')
                .replace(/[\xF2-\xF6\xF8]/g, 'o')
                .replace(/[\xF9-\xFC]/g, 'u')
                .replace(/[\xFE]/g, 'p')
                .replace(/[\xFD\xFF]/g, 'y');
        }

        return str;
    },

    getVNodeProp(vnode, prop) {
        let props = vnode.props;

        if (props) {
            let kebapProp = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            let propName = Object.prototype.hasOwnProperty.call(props, kebapProp) ? kebapProp : prop;

            return vnode.type.props[prop].type === Boolean && props[propName] === '' ? true : props[propName];
        }

        return null;
    },

    convertToFlatCase(str) {
        // convert snake, kebab, camel and pascal cases to flat case
        return this.isNotEmpty(str) ? str.replace(/(-|_)/g, '').toLowerCase() : str;
    },

    isEmpty(value) {
        return value === null || value === undefined || value === '' || (Array.isArray(value) && value.length === 0) || (!(value instanceof Date) && typeof value === 'object' && Object.keys(value).length === 0);
    },

    isNotEmpty(value) {
        return !this.isEmpty(value);
    },

    isPrintableCharacter(char = '') {
        return this.isNotEmpty(char) && char.length === 1 && char.match(/\S| /);
    },

    /**
     * Firefox-v103 does not currently support the "findLast" method. It is stated that this method will be supported with Firefox-v104.
     * https://caniuse.com/mdn-javascript_builtins_array_findlast
     */
    findLast(arr, callback) {
        let item;

        if (this.isNotEmpty(arr)) {
            try {
                item = arr.findLast(callback);
            } catch {
                item = [...arr].reverse().find(callback);
            }
        }

        return item;
    },

    /**
     * Firefox-v103 does not currently support the "findLastIndex" method. It is stated that this method will be supported with Firefox-v104.
     * https://caniuse.com/mdn-javascript_builtins_array_findlastindex
     */
    findLastIndex(arr, callback) {
        let index = -1;

        if (this.isNotEmpty(arr)) {
            try {
                index = arr.findLastIndex(callback);
            } catch {
                index = arr.lastIndexOf([...arr].reverse().find(callback));
            }
        }

        return index;
    }
};

export const DomHandler = {
    innerWidth(el) {
        if (el) {
            let width = el.offsetWidth;
            let style = getComputedStyle(el);

            width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);

            return width;
        }

        return 0;
    },

    width(el) {
        if (el) {
            let width = el.offsetWidth;
            let style = getComputedStyle(el);

            width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);

            return width;
        }

        return 0;
    },

    getWindowScrollTop() {
        let doc = document.documentElement;

        return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    },

    getWindowScrollLeft() {
        let doc = document.documentElement;

        return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    },

    getOuterWidth(el, margin) {
        if (el) {
            let width = el.offsetWidth;

            if (margin) {
                let style = getComputedStyle(el);

                width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
            }

            return width;
        }

        return 0;
    },

    getOuterHeight(el, margin) {
        if (el) {
            let height = el.offsetHeight;

            if (margin) {
                let style = getComputedStyle(el);

                height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
            }

            return height;
        }

        return 0;
    },

    getClientHeight(el, margin) {
        if (el) {
            let height = el.clientHeight;

            if (margin) {
                let style = getComputedStyle(el);

                height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
            }

            return height;
        }

        return 0;
    },

    getViewport() {
        let win = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            w = win.innerWidth || e.clientWidth || g.clientWidth,
            h = win.innerHeight || e.clientHeight || g.clientHeight;

        return { width: w, height: h };
    },

    getOffset(el) {
        if (el) {
            let rect = el.getBoundingClientRect();

            return {
                top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
                left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
            };
        }

        return {
            top: 'auto',
            left: 'auto'
        };
    },

    index(element) {
        if (element) {
            let children = element.parentNode.childNodes;
            let num = 0;

            for (let i = 0; i < children.length; i++) {
                if (children[i] === element) return num;
                if (children[i].nodeType === 1) num++;
            }
        }

        return -1;
    },

    addMultipleClasses(element, className) {
        if (element && className) {
            if (element.classList) {
                let styles = className.split(' ');

                for (let i = 0; i < styles.length; i++) {
                    element.classList.add(styles[i]);
                }
            } else {
                let styles = className.split(' ');

                for (let i = 0; i < styles.length; i++) {
                    element.className += ' ' + styles[i];
                }
            }
        }
    },

    addClass(element, className) {
        if (element && className) {
            if (element.classList) element.classList.add(className);
            else element.className += ' ' + className;
        }
    },

    removeClass(element, className) {
        if (element && className) {
            if (element.classList) element.classList.remove(className);
            else element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    },

    hasClass(element, className) {
        if (element) {
            if (element.classList) return element.classList.contains(className);
            else return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
        }

        return false;
    },

    find(element, selector) {
        return this.isElement(element) ? element.querySelectorAll(selector) : [];
    },

    findSingle(element, selector) {
        return this.isElement(element) ? element.querySelector(selector) : null;
    },

    getHeight(el) {
        if (el) {
            let height = el.offsetHeight;
            let style = getComputedStyle(el);

            height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);

            return height;
        }

        return 0;
    },

    getWidth(el) {
        if (el) {
            let width = el.offsetWidth;
            let style = getComputedStyle(el);

            width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);

            return width;
        }

        return 0;
    },

    absolutePosition(element, target) {
        if (element) {
            let elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
            let elementOuterHeight = elementDimensions.height;
            let elementOuterWidth = elementDimensions.width;
            let targetOuterHeight = target.offsetHeight;
            let targetOuterWidth = target.offsetWidth;
            let targetOffset = target.getBoundingClientRect();
            let windowScrollTop = this.getWindowScrollTop();
            let windowScrollLeft = this.getWindowScrollLeft();
            let viewport = this.getViewport();
            let top, left;

            if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
                top = targetOffset.top + windowScrollTop - elementOuterHeight;
                element.style.transformOrigin = 'bottom';

                if (top < 0) {
                    top = windowScrollTop;
                }
            } else {
                top = targetOuterHeight + targetOffset.top + windowScrollTop;
                element.style.transformOrigin = 'top';
            }

            if (targetOffset.left + elementOuterWidth > viewport.width) left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
            else left = targetOffset.left + windowScrollLeft;

            element.style.top = top + 'px';
            element.style.left = left + 'px';
        }
    },

    relativePosition(element, target) {
        if (element) {
            let elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
            const targetHeight = target.offsetHeight;
            const targetOffset = target.getBoundingClientRect();
            const viewport = this.getViewport();
            let top, left;

            if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
                top = -1 * elementDimensions.height;
                element.style.transformOrigin = 'bottom';

                if (targetOffset.top + top < 0) {
                    top = -1 * targetOffset.top;
                }
            } else {
                top = targetHeight;
                element.style.transformOrigin = 'top';
            }

            if (elementDimensions.width > viewport.width) {
                // element wider then viewport and cannot fit on screen (align at left side of viewport)
                left = targetOffset.left * -1;
            } else if (targetOffset.left + elementDimensions.width > viewport.width) {
                // element wider then viewport but can be fit on screen (align at right side of viewport)
                left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
            } else {
                // element fits on screen (align with target)
                left = 0;
            }

            element.style.top = top + 'px';
            element.style.left = left + 'px';
        }
    },

    getParents(element, parents = []) {
        return element['parentNode'] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
    },

    getScrollableParents(element) {
        let scrollableParents = [];

        if (element) {
            let parents = this.getParents(element);
            const overflowRegex = /(auto|scroll)/;

            const overflowCheck = (node) => {
                let styleDeclaration = window['getComputedStyle'](node, null);

                return overflowRegex.test(styleDeclaration.getPropertyValue('overflow')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowX')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowY'));
            };

            for (let parent of parents) {
                let scrollSelectors = parent.nodeType === 1 && parent.dataset['scrollselectors'];

                if (scrollSelectors) {
                    let selectors = scrollSelectors.split(',');

                    for (let selector of selectors) {
                        let el = this.findSingle(parent, selector);

                        if (el && overflowCheck(el)) {
                            scrollableParents.push(el);
                        }
                    }
                }

                if (parent.nodeType !== 9 && overflowCheck(parent)) {
                    scrollableParents.push(parent);
                }
            }
        }

        return scrollableParents;
    },

    getHiddenElementOuterHeight(element) {
        if (element) {
            element.style.visibility = 'hidden';
            element.style.display = 'block';
            let elementHeight = element.offsetHeight;

            element.style.display = 'none';
            element.style.visibility = 'visible';

            return elementHeight;
        }

        return 0;
    },

    getHiddenElementOuterWidth(element) {
        if (element) {
            element.style.visibility = 'hidden';
            element.style.display = 'block';
            let elementWidth = element.offsetWidth;

            element.style.display = 'none';
            element.style.visibility = 'visible';

            return elementWidth;
        }

        return 0;
    },

    getHiddenElementDimensions(element) {
        if (element) {
            let dimensions = {};

            element.style.visibility = 'hidden';
            element.style.display = 'block';
            dimensions.width = element.offsetWidth;
            dimensions.height = element.offsetHeight;
            element.style.display = 'none';
            element.style.visibility = 'visible';

            return dimensions;
        }

        return 0;
    },

    fadeIn(element, duration) {
        if (element) {
            element.style.opacity = 0;

            let last = +new Date();
            let opacity = 0;

            let tick = function () {
                opacity = +element.style.opacity + (new Date().getTime() - last) / duration;
                element.style.opacity = opacity;
                last = +new Date();

                if (+opacity < 1) {
                    (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
                }
            };

            tick();
        }
    },

    fadeOut(element, ms) {
        if (element) {
            let opacity = 1,
                interval = 50,
                duration = ms,
                gap = interval / duration;

            let fading = setInterval(() => {
                opacity -= gap;

                if (opacity <= 0) {
                    opacity = 0;
                    clearInterval(fading);
                }

                element.style.opacity = opacity;
            }, interval);
        }
    },

    getUserAgent() {
        return navigator.userAgent;
    },

    appendChild(element, target) {
        if (this.isElement(target)) target.appendChild(element);
        else if (target.el && target.elElement) target.elElement.appendChild(element);
        else throw new Error('Cannot append ' + target + ' to ' + element);
    },

    isElement(obj) {
        return typeof HTMLElement === 'object' ? obj instanceof HTMLElement : obj && typeof obj === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string';
    },

    scrollInView(container, item) {
        let borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
        let borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
        let paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
        let paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
        let containerRect = container.getBoundingClientRect();
        let itemRect = item.getBoundingClientRect();
        let offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
        let scroll = container.scrollTop;
        let elementHeight = container.clientHeight;
        let itemHeight = this.getOuterHeight(item);

        if (offset < 0) {
            container.scrollTop = scroll + offset;
        } else if (offset + itemHeight > elementHeight) {
            container.scrollTop = scroll + offset - elementHeight + itemHeight;
        }
    },

    clearSelection() {
        if (window.getSelection) {
            if (window.getSelection().empty) {
                window.getSelection().empty();
            } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
                window.getSelection().removeAllRanges();
            }
        } else if (document['selection'] && document['selection'].empty) {
            try {
                document['selection'].empty();
            } catch (error) {
                //ignore IE bug
            }
        }
    },

    getSelection() {
        if (window.getSelection) return window.getSelection().toString();
        else if (document.getSelection) return document.getSelection().toString();
        else if (document['selection']) return document['selection'].createRange().text;

        return null;
    },

    calculateScrollbarWidth() {
        if (this.calculatedScrollbarWidth != null) return this.calculatedScrollbarWidth;

        let scrollDiv = document.createElement('div');

        scrollDiv.className = 'p-scrollbar-measure';
        document.body.appendChild(scrollDiv);

        let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

        document.body.removeChild(scrollDiv);

        this.calculatedScrollbarWidth = scrollbarWidth;

        return scrollbarWidth;
    },

    getBrowser() {
        if (!this.browser) {
            let matched = this.resolveUserAgent();

            this.browser = {};

            if (matched.browser) {
                this.browser[matched.browser] = true;
                this.browser['version'] = matched.version;
            }

            if (this.browser['chrome']) {
                this.browser['webkit'] = true;
            } else if (this.browser['webkit']) {
                this.browser['safari'] = true;
            }
        }

        return this.browser;
    },

    resolveUserAgent() {
        let ua = navigator.userAgent.toLowerCase();
        let match = /(chrome)[ ]([\w.]+)/.exec(ua) || /(webkit)[ ]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ ]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || (ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)) || [];

        return {
            browser: match[1] || '',
            version: match[2] || '0'
        };
    },

    isVisible(element) {
        return element && element.offsetParent != null;
    },

    invokeElementMethod(element, methodName, args) {
        element[methodName].apply(element, args);
    },

    isExist(element) {
        return !!(element !== null && typeof element !== 'undefined' && element.nodeName && element.parentNode);
    },

    isClient() {
        return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
    },

    focus(el, options) {
        el && document.activeElement !== el && el.focus(options);
    },

    isFocusableElement(element, selector = '') {
        return this.isElement(element)
            ? element.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`)
            : false;
    },

    getFocusableElements(element, selector = '') {
        let focusableElements = this.find(
            element,
            `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`
        );

        let visibleFocusableElements = [];

        for (let focusableElement of focusableElements) {
            if (getComputedStyle(focusableElement).display != 'none' && getComputedStyle(focusableElement).visibility != 'hidden') visibleFocusableElements.push(focusableElement);
        }

        return visibleFocusableElements;
    },

    getFirstFocusableElement(element, selector) {
        const focusableElements = this.getFocusableElements(element, selector);

        return focusableElements.length > 0 ? focusableElements[0] : null;
    },

    getLastFocusableElement(element, selector) {
        const focusableElements = this.getFocusableElements(element, selector);

        return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
    },

    getNextFocusableElement(container, element, selector) {
        const focusableElements = this.getFocusableElements(container, selector);
        const index = focusableElements.length > 0 ? focusableElements.findIndex((el) => el === element) : -1;
        const nextIndex = index > -1 && focusableElements.length >= index + 1 ? index + 1 : -1;

        return nextIndex > -1 ? focusableElements[nextIndex] : null;
    },

    isClickable(element) {
        if (element) {
            const targetNode = element.nodeName;
            const parentNode = element.parentElement && element.parentElement.nodeName;

            return (
                targetNode === 'INPUT' ||
                targetNode === 'TEXTAREA' ||
                targetNode === 'BUTTON' ||
                targetNode === 'A' ||
                parentNode === 'INPUT' ||
                parentNode === 'TEXTAREA' ||
                parentNode === 'BUTTON' ||
                parentNode === 'A' ||
                !!element.closest('.p-button, .p-checkbox, .p-radiobutton')
            );
        }

        return false;
    },

    applyStyle(element, style) {
        if (typeof style === 'string') {
            element.style.cssText = style;
        } else {
            for (let prop in style) {
                element.style[prop] = style[prop];
            }
        }
    },

    isIOS() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window['MSStream'];
    },

    isAndroid() {
        return /(android)/i.test(navigator.userAgent);
    },

    isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    },

    exportCSV(csv, filename) {
        let blob = new Blob([csv], {
            type: 'application/csv;charset=utf-8;'
        });

        if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, filename + '.csv');
        } else {
            let link = document.createElement('a');

            if (link.download !== undefined) {
                link.setAttribute('href', URL.createObjectURL(blob));
                link.setAttribute('download', filename + '.csv');
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                csv = 'data:text/csv;charset=utf-8,' + csv;
                window.open(encodeURI(csv));
            }
        }
    }
};

export const UniqueComponentId = (prefix = 'pv_id_') => {
    lastId++;
    return `${prefix}${lastId}`;
}