//
//  ViewController.h
//  Bouncing Ball
//
//  Created by Federico Paini on 3/8/14.
//  Copyright (c) 2014 Federico Paini. All rights reserved.
//

#import <UIKit/UIKit.h>

float UpMovement;


@interface ViewController : UIViewController
{
    
    IBOutlet UIImageView *YellowBall;
    IBOutlet UIButton *Start;
    IBOutlet UIButton *StopButton;
    
    NSTimer *Movement;

}

- (IBAction)StartButton:(id)sender;
- (IBAction)Stop:(id)sender;
- (void)Bounce;
- (void)Moving;

@end
