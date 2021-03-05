import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Link from 'next/link';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <h1 style={{ margin: '10px' }}>Thank You For Your Submission</h1>
            <p style={{ margin: '10px' }}>You will get an email with further instructions.</p>
            <Link href={`/profile/${this.props.id}`}>
              <a style={{ width: 80, margin: '0 auto' }}>
                <Button s color="secondary" variant="contained">
                  Close
                </Button>
              </a>
            </Link>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
