//
//  AddViewController.h
//  TableAppTraining
//
//  Created by Federico Paini on 3/8/14.
//  Copyright (c) 2014 Federico Paini. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface AddViewController : UIViewController <UITableViewDataSource, UITableViewDelegate>
@property (weak, nonatomic) IBOutlet UITextField *textField;

@end
