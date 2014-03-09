//
//  ViewController.m
//  TableAppTraining
//
//  Created by Federico Paini on 3/8/14.
//  Copyright (c) 2014 Federico Paini. All rights reserved.
//

#import "ViewController.h"
#import "AddViewController.h"

@interface ViewController ()

@end

@implementation ViewController
@synthesize data;

- (void)viewDidLoad
{
    [super viewDidLoad];
	data = [[NSMutableArray alloc] initWithObjects:@"Luke Skywalker", @"Chubakka", @"Han Solo", @"Lando Calrissian", @"Jabba The Hutt", nil];
    
    //place edit/done button on the upeer left
    self.navigationItem.leftBarButtonItem = self.editButtonItem;
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

-(NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
    
    return 1;
}

-(NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    
    return [data count];
}

-(UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    
    static NSString *CellIdentifier = @"Cell";
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier forIndexPath:indexPath];
    
    if (cell == nil) {
        cell = [[UITableViewCell alloc]initWithStyle:UITableViewCellStyleDefault reuseIdentifier:CellIdentifier];
    }
    
    cell.textLabel.text = [data objectAtIndex:indexPath.row];
    return cell;

}

//Called after save is tappped on the AddViewController
-(IBAction)unwindToTableViewController:(UIStoryboardSegue *)sender {
    
    AddViewController *addViewController = (AddViewController *)sender.sourceViewController;
    NSString *text = addViewController.textField.text;
    
    //if Not blank and not whitespaced
    if (![text length] == 0 && ![[text stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceCharacterSet]] length] == 0) {
        
        //Add it at the top of the data source
        [data insertObject:text atIndex:0];
        NSIndexPath *indexPath = [NSIndexPath indexPathForRow:0 inSection:0];
        
        //Insert it into the table
        [self.tableView beginUpdates];
        [self.tableView insertRowsAtIndexPaths:@[indexPath] withRowAnimation:UITableViewRowAnimationAutomatic];
        [self.tableView endUpdates];
    }
}

//Editing the row
-(void)setEditing:(BOOL)editing animated:(BOOL)animated {
    
    [super setEditing:editing animated:animated];
    [self.tableView setEditing:editing animated:animated];
    
}

//Delete the row from table
-(void)tableView: (UITableView *)tableView commitEditingStyle:(UITableViewCellEditingStyle)editingStyle forRowAtIndexPath:(NSIndexPath *)indexPath {
    
    if (editingStyle == UITableViewCellEditingStyleDelete) {
        
        //remove the item form the array
        [data removeObjectAtIndex:indexPath.row];
        
        //delete the item from the table
        [tableView deleteRowsAtIndexPaths:@[indexPath] withRowAnimation:UITableViewRowAnimationTop];
    }
}









@end
