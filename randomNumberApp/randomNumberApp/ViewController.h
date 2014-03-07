//
//  ViewController.h
//  randomNumberApp
//
//  Created by Federico Paini on 3/6/14.
//  Copyright (c) 2014 Federico Paini. All rights reserved.
//

#import <UIKit/UIKit.h>


int RandomNumber;

@interface ViewController : UIViewController

@property (weak, nonatomic) IBOutlet UILabel *DisplayRandomNumber;
//@property (weak, nonatomic) IBOutlet UILabel *DisplaySliderLabel;
@property (weak, nonatomic) IBOutlet UISlider *Slider;

- (IBAction)RandomNumberButton:(id)sender;
- (IBAction)ResetButton:(id)sender;
//- (IBAction)SliderChanged:(id)sender;

@end
