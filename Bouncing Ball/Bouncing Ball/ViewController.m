//
//  ViewController.m
//  Bouncing Ball
//
//  Created by Federico Paini on 3/8/14.
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

- (IBAction)StartButton:(id)sender
{
    Start.hidden = TRUE;
    StopButton.hidden = TRUE;
    UpMovement = -8;
    
    Movement = [NSTimer scheduledTimerWithTimeInterval:0.05 target:self selector:@selector(Moving) userInfo:nil repeats:YES];

}

- (IBAction)Stop:(id)sender {
    StopButton.hidden = TRUE;
    Start.hidden = FALSE;
}


- (void)Bounce {
    YellowBall.animationImages = [NSArray arrayWithObjects:
                                  [UIImage imageNamed:@"yellow_ball_half.png"],
                                  [UIImage imageNamed:@"yellow_ball_final.png"],
                                  [UIImage imageNamed:@"yellow_ball_half.png"],
                                  [UIImage imageNamed:@"yellow_ball_full.png"],nil];
    
    [YellowBall setAnimationRepeatCount:1];
    YellowBall.animationDuration = 0.2;
    [YellowBall startAnimating];
    
    UpMovement = 8;
    
}

- (void)Moving {
    
    YellowBall.center = CGPointMake(YellowBall.center.x, YellowBall.center.y - UpMovement);
    
    if ((CGRectIntersectsRect(YellowBall.frame, Start.frame)) && (UpMovement < -4)) {
        [self Bounce];
    }
    
    UpMovement -= 0.2;
}



@end
