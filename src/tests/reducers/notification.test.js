import notification from './../../reducers/notification';

describe('notifications reducer', function () {
    it('should return default state', () => {
        const initialState = {
            kind: '',
            message: ''};

        expect(notification(undefined, {})).toEqual(initialState)
    });

    it('should handle WARNING_NOTIFICATION action type', () => {
        const  notification_message = 'test warning message';
        const expectedState = {
            kind: 'warning',
            message: notification_message};

        const action = {
            type: 'warning notification',
            kind: 'warning',
            message: notification_message};

        expect(notification(undefined, action)).toEqual(expectedState)
    })
});
