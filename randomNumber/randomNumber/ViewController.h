//
//  ViewController.h
//  randomNumber
//
//  Created by Federico Paini on 3/2/14.
//  Copyright (c) 2014 Federico Paini. All rights reserved.
//

#import <UIKit/UIKit.h>

int RandomValue;

@interface ViewController : UIViewController
{
    IBOutlet UILabel *DisplayRandomValue;
}

-(IBAction)genrateRandomButton:(id)sender;

@end
