import expect from 'expect'
import * as actions from '../../actions'

describe('Filter actions', () => {
    it('applyFilter should create APPLY_FILTER action', () => {
        let fixture = {
            queryFiled: "member",
            queryId: "123"
        };

        expect(actions.applyFilter(fixture.queryFiled, fixture.queryId)).toEqual({
            type: 'APPLY_FILTER',
            queryFiled: fixture.queryFiled,
            queryId: fixture.queryId
        })
    });
});
