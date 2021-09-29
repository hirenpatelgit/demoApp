package com.demoapp;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * Created by Hiren Patel on 9th Sept 2021
 */


public class RNDeviceTypePackage implements ReactPackage {

    public RNDeviceTypePackage() {
    }

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
//        return Arrays.<NativeModule>asList(
//                new RNDeviceType(reactContext)
//        );
        List<NativeModule> modules = new ArrayList<>();

        modules.add(new RNDeviceType(reactContext));

        return modules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}

