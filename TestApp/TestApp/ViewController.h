//
//  ViewController.h
//  TestApp
//
//  Created by Federico Paini on 3/1/14.
//  Copyright (c) 2014 Federico Paini. All rights reserved.
//

#import <UIKit/UIKit.h>

bool isMorning = TRUE;

@interface ViewController : UIViewController
@property (weak, nonatomic) IBOutlet UILabel *displayLabel;
- (IBAction)buttonPressMain:(id)sender;

- (IBAction)textFiledEndEditing:(id)sender;

@end