import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import '../App.css';

const ZERO = 0
const MILLI_IN_SEC = 1000
const SEC_IN_MIN = 60
const MIN_IN_HR = 60
const HR_IN_DAY = 24
const DAY_IN_WEEK = 7
const DAY_IN_MONTH = 31
const MONTH_IN_YEAR = 12

class AgeCalc extends React.Component {
    constructor(props) {
        super(props);
        this.state = { birthdate: ZERO, 
                       elapsedSec: ZERO,
                       elapsedMin: ZERO,
                       elapsedHr: ZERO,
                       elapsedDays: ZERO,
                       elapsedWks: ZERO,
                       elapsedMonths: ZERO,
                       elapsedYears: ZERO,
                     };
    }

    changeHandler = (event) => {
        event.preventDefault();
        
        // store birth date and current date
        const currentDate = new Date()
        const birthDate = new Date(event.target.value)
        
        // elapsed time from birthdate to current date in milli
        const diffInMilli = currentDate - birthDate;

        // time calculations
        const sec = diffInMilli/MILLI_IN_SEC
        const min = diffInMilli/(SEC_IN_MIN*MILLI_IN_SEC)
        const hr = diffInMilli/(MIN_IN_HR*SEC_IN_MIN*MILLI_IN_SEC)
        const day = diffInMilli/(HR_IN_DAY*MIN_IN_HR*SEC_IN_MIN*MILLI_IN_SEC)
        const week = diffInMilli/(DAY_IN_WEEK*HR_IN_DAY*MIN_IN_HR*SEC_IN_MIN*MILLI_IN_SEC)
        const month = diffInMilli/(DAY_IN_MONTH*HR_IN_DAY*MIN_IN_HR*SEC_IN_MIN*MILLI_IN_SEC)
        const year = diffInMilli/(MONTH_IN_YEAR*DAY_IN_MONTH*HR_IN_DAY*MIN_IN_HR*SEC_IN_MIN*MILLI_IN_SEC)

        // store all time calculations in state
        this.setState({ birthdate: birthDate, 
                        elapsedSec: sec,
                        elapsedMin: min,
                        elapsedHr: hr,
                        elapsedDays: day,
                        elapsedWks: week,
                        elapsedMonths: month,
                        elapsedYears: year
                     });
    }

    render() {
        return (
            <div className="Calc">
            <br/>
            <Container>
                <Paper elevation={3} variant="outlined" className="CalcPaper">
                    <form>
                        <label>
                            Type in or select your birthdate below:<br/>
                            <input type="date" onChange={this.changeHandler}/>
                        </label>
                    </form>
                    <Typography style={{paddingTop: '10px', fontFamily: 'cursive', fontSize: '1.2em'}}>
                        <b>Years Lived</b>: {Math.round(this.state.elapsedYears)} <br/>
                        <b>Months Lived</b>: {Math.round(this.state.elapsedMonths)} <br/>
                        <b>Weeks Lived</b>: {Math.round(this.state.elapsedWks)} <br/>
                        <b>Days Lived</b>: {Math.round(this.state.elapsedDays)} <br/>
                        <b>Hours Lived</b>: {Math.round(this.state.elapsedHr)} <br/>
                        <b>Minutes Lived</b>: {Math.round(this.state.elapsedMin)} <br/>
                        <b>Seconds Lived</b>: {Math.round(this.state.elapsedSec)}
                    </Typography>
                </Paper>
            </Container>
            </div>
        );
    }
}

export default AgeCalc;