//
//  ViewController.m
//  Counter
//
//  Created by Federico Paini on 3/2/14.
//  Copyright (c) 2014 Federico Paini. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

-(IBAction)Up:(id)sender {
    numberCount ++;
    Counterdisplay.text = [NSString stringWithFormat:@"%i", numberCount];
}

-(IBAction)Down:(id)sender{
    
    numberCount --;
    
    Counterdisplay.text = [NSString stringWithFormat:@"%i", numberCount];
    
    if (numberCount < 0) {
        numberCount = 0;
        Counterdisplay.text = [NSString stringWithFormat:@"0"];
    }
}

-(IBAction)Restart:(id)sender{
    numberCount = 0;
    Counterdisplay.text = [NSString stringWithFormat:@"0"];
    
}

-(IBAction)CountDown:(id)sender{
    
    while (numberCount != 0) {
        Counterdisplay.text = [NSString stringWithFormat:@"%i", numberCount];
        numberCount --;
    }

}

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

@end
