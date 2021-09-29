//
//  RNDeviceType.m
//  
//
//  Created by Hiren Patel on 29th Sept 2021.
//

#import "RNDeviceType.h"

@implementation RNDeviceType

// To export a module named RNDeviceType
RCT_EXPORT_MODULE(RNDeviceType);

- (NSDictionary *)constantsToExport
{
  #if TARGET_OS_SIMULATOR
    return @{ @"isEmulator": @TRUE };
  #else
    return @{ @"isEmulator": @FALSE };
  #endif
}

@end
