//
//  ViewController.h
//  Counter
//
//  Created by Federico Paini on 3/2/14.
//  Copyright (c) 2014 Federico Paini. All rights reserved.
//

#import <UIKit/UIKit.h>

int numberCount;

@interface ViewController : UIViewController

{
    IBOutlet UILabel *Counterdisplay;
}

-(IBAction)Up:(id)sender;
-(IBAction)Down:(id)sender;
-(IBAction)Restart:(id)sender;
-(IBAction)CountDown:(id)sender;

@end
