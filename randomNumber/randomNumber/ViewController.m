//
//  ViewController.m
//  randomNumber
//
//  Created by Federico Paini on 3/2/14.
//  Copyright (c) 2014 Federico Paini. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController


-(IBAction)genrateRandomButton:(id)sender{
    
    RandomValue = arc4random() %11;
    DisplayRandomValue.text = [NSString stringWithFormat:@"%i", RandomValue];
    
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
