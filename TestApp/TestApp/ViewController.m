//
//  ViewController.m
//  TestApp
//
//  Created by Federico Paini on 3/1/14.
//  Copyright (c) 2014 Federico Paini. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController
@synthesize displayLabel;


- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)buttonPressMain:(id)sender {
    
    
    if (isMorning == TRUE) {
        
        displayLabel.text = @"Top o' the morning to ya!";
        isMorning = FALSE;
        
    } else {
        
        displayLabel.text = @"Have a nice night!";
        isMorning = TRUE;
    }
}

- (IBAction)textFiledEndEditing:(id)sender {
    [sender resignFirstResponder];
}
@end
