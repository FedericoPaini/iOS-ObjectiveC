//
//  ViewController.m
//  Picker
//
//  Created by Federico Paini on 3/13/14.
//  Copyright (c) 2014 Federico Paini. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@property NSArray *moods; //private property
@property NSArray *levelMoods;

@end

@implementation ViewController


-(NSInteger)numberOfComponentsInPickerView:(UIPickerView *)pickerView{
    
    return 1;
}


-(NSInteger)pickerView:(UIPickerView *)pickerView numberOfRowsInComponent:(NSInteger)component{
   
        
        return self.moods.count;
}


-(NSString *)pickerView:(UIPickerView *)pickerView titleForRow:(NSInteger)row forComponent:(NSInteger)component{
    
        return self.moods[row];

}

-(void)pickerView:(UIPickerView *)pickerView didSelectRow:(NSInteger)row inComponent:(NSInteger)component{
    
    UIColor *color;
    UIAlertView *goodMessage = [[UIAlertView alloc] initWithTitle:nil message:@"I feel good!" delegate:nil cancelButtonTitle:@"Dismiss" otherButtonTitles:nil, nil];
    UIAlertView *sadMessage = [[UIAlertView alloc] initWithTitle:nil message:@"I feel blue! :(" delegate:nil cancelButtonTitle:@"Dismiss" otherButtonTitles:nil, nil];
    
    switch (row) {
        case 0: 
            color = [UIColor grayColor];
            [sadMessage show];
            break;
            
        case 1: case 2: case 3:
            color = [UIColor colorWithRed:1.0 green:0.85 blue:0.0 alpha:1.0];
            break;
            
        case 4: case 5:
            color = [UIColor purpleColor];
            [goodMessage show];
            break;
            
        default:
            color = [UIColor whiteColor];
            break;
    }
    self.view.backgroundColor = color;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
	
    self.moods = @[@"Sad", @"Happy", @"Ecstatic", @"Psyched", @"Optimistic", @"Overjoyed"];
    self.view.backgroundColor = [UIColor grayColor];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
