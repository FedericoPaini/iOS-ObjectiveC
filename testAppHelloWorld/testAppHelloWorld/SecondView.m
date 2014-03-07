//
//  SecondView.m
//  testAppHelloWorld
//
//  Created by Federico Paini on 3/2/14.
//  Copyright (c) 2014 Federico Paini. All rights reserved.
//

#import "SecondView.h"

@interface SecondView ()

@end

@implementation SecondView

-(IBAction)Button:(id)sender {
    
    HelloWorldLable.text = [NSString stringWithFormat:@"Hello World!"];
    
}


- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
