//
//  ViewController.m
//  randomNumberApp
//
//  Created by Federico Paini on 3/6/14.
//  Copyright (c) 2014 Federico Paini. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

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

- (IBAction)RandomNumberButton:(id)sender {
    
    RandomNumber = arc4random() %101;
    _DisplayRandomNumber.text = [NSString stringWithFormat:@"%i", RandomNumber];
}

- (IBAction)ResetButton:(id)sender {
    
    _DisplayRandomNumber.text = [NSString stringWithFormat:@"0"];
}

- (IBAction)SliderChanged:(id)sender {
    //float valueFloat = _Slider.value;
    //int valueInt = (int)valueFloat;
    
    //_DisplaySliderLabel.text = [NSString stringWithFormat:@"%i", valueInt];
    
}
@end
