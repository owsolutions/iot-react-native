import { sample, random, times } from 'lodash';

export let mockAccessories = times(10, () => {
    return mockGenerator();
})
.map(($el, index) => {
    $el.key = index;
    return $el;
});

function mockGenerator () {
    function byType () {
        switch (random(1,2)) {
            case 1:
                return {
                    value: random(5,50),
                    type: {
                        key: 'temperature'
                    }
                }
            case 2:
                return {
                    value: sample([false, true]),
                    type: {
                        key: 'single'
                    }
                }
        }
    }
    return {
        name: sample(['Front Lamp' , 'Back Lamp', 'Waterpump', 'Fan', 'Green Light' , 'Red Light', 'Night Dim']),
        place: random(1,4),
        ...byType()
    };
}