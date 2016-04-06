import { connect } from 'react-redux'
import { applyFilter } from '../actions'
import Filter from '../components/Filter'

const mapStateToProps = (state) => {
    return {
        members: state.team.members,
        apps: state.team.apps
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMemberSelect: (id) => {
            dispatch(applyFilter('member', id));
        },
        onAppSelect: (id) => {
            dispatch(applyFilter('app', id));
        }
    }
};

const TicketFilter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);

export default TicketFilter