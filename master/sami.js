(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '    <ul>                <li data-name="namespace:" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">Psr</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="namespace:Psr_Log" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Psr/Log.html">Log</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="namespace:Psr_Log_Test" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Psr/Log/Test.html">Test</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:Psr_Log_Test_DummyTest" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Psr/Log/Test/DummyTest.html">DummyTest</a>                    </div>                </li>                            <li data-name="class:Psr_Log_Test_LoggerInterfaceTest" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Psr/Log/Test/LoggerInterfaceTest.html">LoggerInterfaceTest</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Psr_Log_AbstractLogger" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Psr/Log/AbstractLogger.html">AbstractLogger</a>                    </div>                </li>                            <li data-name="class:Psr_Log_InvalidArgumentException" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Psr/Log/InvalidArgumentException.html">InvalidArgumentException</a>                    </div>                </li>                            <li data-name="class:Psr_Log_LogLevel" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Psr/Log/LogLevel.html">LogLevel</a>                    </div>                </li>                            <li data-name="class:Psr_Log_LoggerAwareInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Psr/Log/LoggerAwareInterface.html">LoggerAwareInterface</a>                    </div>                </li>                            <li data-name="class:Psr_Log_LoggerAwareTrait" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Psr/Log/LoggerAwareTrait.html">LoggerAwareTrait</a>                    </div>                </li>                            <li data-name="class:Psr_Log_LoggerInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Psr/Log/LoggerInterface.html">LoggerInterface</a>                    </div>                </li>                            <li data-name="class:Psr_Log_LoggerTrait" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Psr/Log/LoggerTrait.html">LoggerTrait</a>                    </div>                </li>                            <li data-name="class:Psr_Log_NullLogger" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Psr/Log/NullLogger.html">NullLogger</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                            <li data-name="namespace:" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">Skyzyx</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="namespace:Skyzyx_Signer" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Skyzyx/Signer.html">Signer</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:Skyzyx_Signer_Signer" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Skyzyx/Signer/Signer.html">Signer</a>                    </div>                </li>                            <li data-name="class:Skyzyx_Signer_SignerInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Skyzyx/Signer/SignerInterface.html">SignerInterface</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                            <li data-name="namespace:" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">WePay</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="namespace:WePay_Signer" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="WePay/Signer.html">Signer</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:WePay_Signer_Signer" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="WePay/Signer/Signer.html">Signer</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    {"type": "Namespace", "link": "Psr.html", "name": "Psr", "doc": "Namespace Psr"},{"type": "Namespace", "link": "Psr/Log.html", "name": "Psr\\Log", "doc": "Namespace Psr\\Log"},{"type": "Namespace", "link": "Psr/Log/Test.html", "name": "Psr\\Log\\Test", "doc": "Namespace Psr\\Log\\Test"},{"type": "Namespace", "link": "Skyzyx.html", "name": "Skyzyx", "doc": "Namespace Skyzyx"},{"type": "Namespace", "link": "Skyzyx/Signer.html", "name": "Skyzyx\\Signer", "doc": "Namespace Skyzyx\\Signer"},{"type": "Namespace", "link": "WePay.html", "name": "WePay", "doc": "Namespace WePay"},{"type": "Namespace", "link": "WePay/Signer.html", "name": "WePay\\Signer", "doc": "Namespace WePay\\Signer"},
            {"type": "Interface", "fromName": "Psr\\Log", "fromLink": "Psr/Log.html", "link": "Psr/Log/LoggerAwareInterface.html", "name": "Psr\\Log\\LoggerAwareInterface", "doc": "&quot;Describes a logger-aware instance&quot;"},
                                                        {"type": "Method", "fromName": "Psr\\Log\\LoggerAwareInterface", "fromLink": "Psr/Log/LoggerAwareInterface.html", "link": "Psr/Log/LoggerAwareInterface.html#method_setLogger", "name": "Psr\\Log\\LoggerAwareInterface::setLogger", "doc": "&quot;Sets a logger instance on the object&quot;"},
            
            {"type": "Interface", "fromName": "Psr\\Log", "fromLink": "Psr/Log.html", "link": "Psr/Log/LoggerInterface.html", "name": "Psr\\Log\\LoggerInterface", "doc": "&quot;Describes a logger instance&quot;"},
                                                        {"type": "Method", "fromName": "Psr\\Log\\LoggerInterface", "fromLink": "Psr/Log/LoggerInterface.html", "link": "Psr/Log/LoggerInterface.html#method_emergency", "name": "Psr\\Log\\LoggerInterface::emergency", "doc": "&quot;System is unusable.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\LoggerInterface", "fromLink": "Psr/Log/LoggerInterface.html", "link": "Psr/Log/LoggerInterface.html#method_alert", "name": "Psr\\Log\\LoggerInterface::alert", "doc": "&quot;Action must be taken immediately.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\LoggerInterface", "fromLink": "Psr/Log/LoggerInterface.html", "link": "Psr/Log/LoggerInterface.html#method_critical", "name": "Psr\\Log\\LoggerInterface::critical", "doc": "&quot;Critical conditions.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\LoggerInterface", "fromLink": "Psr/Log/LoggerInterface.html", "link": "Psr/Log/LoggerInterface.html#method_error", "name": "Psr\\Log\\LoggerInterface::error", "doc": "&quot;Runtime errors that do not require immediate action but should typically\nbe logged and monitored.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\LoggerInterface", "fromLink": "Psr/Log/LoggerInterface.html", "link": "Psr/Log/LoggerInterface.html#method_warning", "name": "Psr\\Log\\LoggerInterface::warning", "doc": "&quot;Exceptional occurrences that are not errors.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\LoggerInterface", "fromLink": "Psr/Log/LoggerInterface.html", "link": "Psr/Log/LoggerInterface.html#method_notice", "name": "Psr\\Log\\LoggerInterface::notice", "doc": "&quot;Normal but significant events.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\LoggerInterface", "fromLink": "Psr/Log/LoggerInterface.html", "link": "Psr/Log/LoggerInterface.html#method_info", "name": "Psr\\Log\\LoggerInterface::info", "doc": "&quot;Interesting events.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\LoggerInterface", "fromLink": "Psr/Log/LoggerInterface.html", "link": "Psr/Log/LoggerInterface.html#method_debug", "name": "Psr\\Log\\LoggerInterface::debug", "doc": "&quot;Detailed debug information.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\LoggerInterface", "fromLink": "Psr/Log/LoggerInterface.html", "link": "Psr/Log/LoggerInterface.html#method_log", "name": "Psr\\Log\\LoggerInterface::log", "doc": "&quot;Logs with an arbitrary level.&quot;"},
            
            {"type": "Interface", "fromName": "Skyzyx\\Signer", "fromLink": "Skyzyx/Signer.html", "link": "Skyzyx/Signer/SignerInterface.html", "name": "Skyzyx\\Signer\\SignerInterface", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Skyzyx\\Signer\\SignerInterface", "fromLink": "Skyzyx/Signer/SignerInterface.html", "link": "Skyzyx/Signer/SignerInterface.html#method_getSelfKey", "name": "Skyzyx\\Signer\\SignerInterface::getSelfKey", "doc": "&quot;Gets the self key that was set in the constructor.&quot;"},
                    {"type": "Method", "fromName": "Skyzyx\\Signer\\SignerInterface", "fromLink": "Skyzyx/Signer/SignerInterface.html", "link": "Skyzyx/Signer/SignerInterface.html#method_getClientId", "name": "Skyzyx\\Signer\\SignerInterface::getClientId", "doc": "&quot;Gets the client key that was set in the constructor.&quot;"},
                    {"type": "Method", "fromName": "Skyzyx\\Signer\\SignerInterface", "fromLink": "Skyzyx/Signer/SignerInterface.html", "link": "Skyzyx/Signer/SignerInterface.html#method_getClientSecret", "name": "Skyzyx\\Signer\\SignerInterface::getClientSecret", "doc": "&quot;Gets the client secret that was set in the constructor.&quot;"},
                    {"type": "Method", "fromName": "Skyzyx\\Signer\\SignerInterface", "fromLink": "Skyzyx/Signer/SignerInterface.html", "link": "Skyzyx/Signer/SignerInterface.html#method_sign", "name": "Skyzyx\\Signer\\SignerInterface::sign", "doc": "&quot;Sign the payload to produce a signature for its contents.&quot;"},
            
            
            {"type": "Class", "fromName": "Psr\\Log", "fromLink": "Psr/Log.html", "link": "Psr/Log/AbstractLogger.html", "name": "Psr\\Log\\AbstractLogger", "doc": "&quot;This is a simple Logger implementation that other Loggers can inherit from.&quot;"},
                                                        {"type": "Method", "fromName": "Psr\\Log\\AbstractLogger", "fromLink": "Psr/Log/AbstractLogger.html", "link": "Psr/Log/AbstractLogger.html#method_emergency", "name": "Psr\\Log\\AbstractLogger::emergency", "doc": "&quot;System is unusable.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\AbstractLogger", "fromLink": "Psr/Log/AbstractLogger.html", "link": "Psr/Log/AbstractLogger.html#method_alert", "name": "Psr\\Log\\AbstractLogger::alert", "doc": "&quot;Action must be taken immediately.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\AbstractLogger", "fromLink": "Psr/Log/AbstractLogger.html", "link": "Psr/Log/AbstractLogger.html#method_critical", "name": "Psr\\Log\\AbstractLogger::critical", "doc": "&quot;Critical conditions.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\AbstractLogger", "fromLink": "Psr/Log/AbstractLogger.html", "link": "Psr/Log/AbstractLogger.html#method_error", "name": "Psr\\Log\\AbstractLogger::error", "doc": "&quot;Runtime errors that do not require immediate action but should typically\nbe logged and monitored.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\AbstractLogger", "fromLink": "Psr/Log/AbstractLogger.html", "link": "Psr/Log/AbstractLogger.html#method_warning", "name": "Psr\\Log\\AbstractLogger::warning", "doc": "&quot;Exceptional occurrences that are not errors.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\AbstractLogger", "fromLink": "Psr/Log/AbstractLogger.html", "link": "Psr/Log/AbstractLogger.html#method_notice", "name": "Psr\\Log\\AbstractLogger::notice", "doc": "&quot;Normal but significant events.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\AbstractLogger", "fromLink": "Psr/Log/AbstractLogger.html", "link": "Psr/Log/AbstractLogger.html#method_info", "name": "Psr\\Log\\AbstractLogger::info", "doc": "&quot;Interesting events.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\AbstractLogger", "fromLink": "Psr/Log/AbstractLogger.html", "link": "Psr/Log/AbstractLogger.html#method_debug", "name": "Psr\\Log\\AbstractLogger::debug", "doc": "&quot;Detailed debug information.&quot;"},
            
            {"type": "Class", "fromName": "Psr\\Log", "fromLink": "Psr/Log.html", "link": "Psr/Log/InvalidArgumentException.html", "name": "Psr\\Log\\InvalidArgumentException", "doc": "&quot;\n&quot;"},
                    
            {"type": "Class", "fromName": "Psr\\Log", "fromLink": "Psr/Log.html", "link": "Psr/Log/LogLevel.html", "name": "Psr\\Log\\LogLevel", "doc": "&quot;Describes log levels&quot;"},
                    
            {"type": "Class", "fromName": "Psr\\Log", "fromLink": "Psr/Log.html", "link": "Psr/Log/LoggerAwareInterface.html", "name": "Psr\\Log\\LoggerAwareInterface", "doc": "&quot;Describes a logger-aware instance&quot;"},
                                                        {"type": "Method", "fromName": "Psr\\Log\\LoggerAwareInterface", "fromLink": "Psr/Log/LoggerAwareInterface.html", "link": "Psr/Log/LoggerAwareInterface.html#method_setLogger", "name": "Psr\\Log\\LoggerAwareInterface::setLogger", "doc": "&quot;Sets a logger instance on the object&quot;"},
            
            {"type": "Trait", "fromName": "Psr\\Log", "fromLink": "Psr/Log.html", "link": "Psr/Log/LoggerAwareTrait.html", "name": "Psr\\Log\\LoggerAwareTrait", "doc": "&quot;Basic Implementation of LoggerAwareInterface.&quot;"},
                                                        {"type": "Method", "fromName": "Psr\\Log\\LoggerAwareTrait", "fromLink": "Psr/Log/LoggerAwareTrait.html", "link": "Psr/Log/LoggerAwareTrait.html#method_setLogger", "name": "Psr\\Log\\LoggerAwareTrait::setLogger", "doc": "&quot;Sets a logger.&quot;"},
            
            {"type": "Class", "fromName": "Psr\\Log", "fromLink": "Psr/Log.html", "link": "Psr/Log/LoggerInterface.html", "name": "Psr\\Log\\LoggerInterface", "doc": "&quot;Describes a logger instance&quot;"},
                                                        {"type": "Method", "fromName": "Psr\\Log\\LoggerInterface", "fromLink": "Psr/Log/LoggerInterface.html", "link": "Psr/Log/LoggerInterface.html#method_emergency", "name": "Psr\\Log\\LoggerInterface::emergency", "doc": "&quot;System is unusable.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\LoggerInterface", "fromLink": "Psr/Log/LoggerInterface.html", "link": "Psr/Log/LoggerInterface.html#method_alert", "name": "Psr\\Log\\LoggerInterface::alert", "doc": "&quot;Action must be taken immediately.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\LoggerInterface", "fromLink": "Psr/Log/LoggerInterface.html", "link": "Psr/Log/LoggerInterface.html#method_critical", "name": "Psr\\Log\\LoggerInterface::critical", "doc": "&quot;Critical conditions.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\LoggerInterface", "fromLink": "Psr/Log/LoggerInterface.html", "link": "Psr/Log/LoggerInterface.html#method_error", "name": "Psr\\Log\\LoggerInterface::error", "doc": "&quot;Runtime errors that do not require immediate action but should typically\nbe logged and monitored.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\LoggerInterface", "fromLink": "Psr/Log/LoggerInterface.html", "link": "Psr/Log/LoggerInterface.html#method_warning", "name": "Psr\\Log\\LoggerInterface::warning", "doc": "&quot;Exceptional occurrences that are not errors.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\LoggerInterface", "fromLink": "Psr/Log/LoggerInterface.html", "link": "Psr/Log/LoggerInterface.html#method_notice", "name": "Psr\\Log\\LoggerInterface::notice", "doc": "&quot;Normal but significant events.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\LoggerInterface", "fromLink": "Psr/Log/LoggerInterface.html", "link": "Psr/Log/LoggerInterface.html#method_info", "name": "Psr\\Log\\LoggerInterface::info", "doc": "&quot;Interesting events.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\LoggerInterface", "fromLink": "Psr/Log/LoggerInterface.html", "link": "Psr/Log/LoggerInterface.html#method_debug", "name": "Psr\\Log\\LoggerInterface::debug", "doc": "&quot;Detailed debug information.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\LoggerInterface", "fromLink": "Psr/Log/LoggerInterface.html", "link": "Psr/Log/LoggerInterface.html#method_log", "name": "Psr\\Log\\LoggerInterface::log", "doc": "&quot;Logs with an arbitrary level.&quot;"},
            
            {"type": "Trait", "fromName": "Psr\\Log", "fromLink": "Psr/Log.html", "link": "Psr/Log/LoggerTrait.html", "name": "Psr\\Log\\LoggerTrait", "doc": "&quot;This is a simple Logger trait that classes unable to extend AbstractLogger\n(because they extend another class, etc) can include.&quot;"},
                                                        {"type": "Method", "fromName": "Psr\\Log\\LoggerTrait", "fromLink": "Psr/Log/LoggerTrait.html", "link": "Psr/Log/LoggerTrait.html#method_emergency", "name": "Psr\\Log\\LoggerTrait::emergency", "doc": "&quot;System is unusable.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\LoggerTrait", "fromLink": "Psr/Log/LoggerTrait.html", "link": "Psr/Log/LoggerTrait.html#method_alert", "name": "Psr\\Log\\LoggerTrait::alert", "doc": "&quot;Action must be taken immediately.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\LoggerTrait", "fromLink": "Psr/Log/LoggerTrait.html", "link": "Psr/Log/LoggerTrait.html#method_critical", "name": "Psr\\Log\\LoggerTrait::critical", "doc": "&quot;Critical conditions.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\LoggerTrait", "fromLink": "Psr/Log/LoggerTrait.html", "link": "Psr/Log/LoggerTrait.html#method_error", "name": "Psr\\Log\\LoggerTrait::error", "doc": "&quot;Runtime errors that do not require immediate action but should typically\nbe logged and monitored.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\LoggerTrait", "fromLink": "Psr/Log/LoggerTrait.html", "link": "Psr/Log/LoggerTrait.html#method_warning", "name": "Psr\\Log\\LoggerTrait::warning", "doc": "&quot;Exceptional occurrences that are not errors.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\LoggerTrait", "fromLink": "Psr/Log/LoggerTrait.html", "link": "Psr/Log/LoggerTrait.html#method_notice", "name": "Psr\\Log\\LoggerTrait::notice", "doc": "&quot;Normal but significant events.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\LoggerTrait", "fromLink": "Psr/Log/LoggerTrait.html", "link": "Psr/Log/LoggerTrait.html#method_info", "name": "Psr\\Log\\LoggerTrait::info", "doc": "&quot;Interesting events.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\LoggerTrait", "fromLink": "Psr/Log/LoggerTrait.html", "link": "Psr/Log/LoggerTrait.html#method_debug", "name": "Psr\\Log\\LoggerTrait::debug", "doc": "&quot;Detailed debug information.&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\LoggerTrait", "fromLink": "Psr/Log/LoggerTrait.html", "link": "Psr/Log/LoggerTrait.html#method_log", "name": "Psr\\Log\\LoggerTrait::log", "doc": "&quot;Logs with an arbitrary level.&quot;"},
            
            {"type": "Class", "fromName": "Psr\\Log", "fromLink": "Psr/Log.html", "link": "Psr/Log/NullLogger.html", "name": "Psr\\Log\\NullLogger", "doc": "&quot;This Logger can be used to avoid conditional log calls&quot;"},
                                                        {"type": "Method", "fromName": "Psr\\Log\\NullLogger", "fromLink": "Psr/Log/NullLogger.html", "link": "Psr/Log/NullLogger.html#method_log", "name": "Psr\\Log\\NullLogger::log", "doc": "&quot;Logs with an arbitrary level.&quot;"},
            
            {"type": "Class", "fromName": "Psr\\Log\\Test", "fromLink": "Psr/Log/Test.html", "link": "Psr/Log/Test/DummyTest.html", "name": "Psr\\Log\\Test\\DummyTest", "doc": "&quot;\n&quot;"},
                    
            {"type": "Class", "fromName": "Psr\\Log\\Test", "fromLink": "Psr/Log/Test.html", "link": "Psr/Log/Test/LoggerInterfaceTest.html", "name": "Psr\\Log\\Test\\LoggerInterfaceTest", "doc": "&quot;Provides a base test class for ensuring compliance with the LoggerInterface&quot;"},
                                                        {"type": "Method", "fromName": "Psr\\Log\\Test\\LoggerInterfaceTest", "fromLink": "Psr/Log/Test/LoggerInterfaceTest.html", "link": "Psr/Log/Test/LoggerInterfaceTest.html#method_getLogger", "name": "Psr\\Log\\Test\\LoggerInterfaceTest::getLogger", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\Test\\LoggerInterfaceTest", "fromLink": "Psr/Log/Test/LoggerInterfaceTest.html", "link": "Psr/Log/Test/LoggerInterfaceTest.html#method_getLogs", "name": "Psr\\Log\\Test\\LoggerInterfaceTest::getLogs", "doc": "&quot;This must return the log messages in order with a simple formatting: \&quot;&lt;LOG LEVEL&gt; &lt;MESSAGE&gt;\&quot;&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\Test\\LoggerInterfaceTest", "fromLink": "Psr/Log/Test/LoggerInterfaceTest.html", "link": "Psr/Log/Test/LoggerInterfaceTest.html#method_testImplements", "name": "Psr\\Log\\Test\\LoggerInterfaceTest::testImplements", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\Test\\LoggerInterfaceTest", "fromLink": "Psr/Log/Test/LoggerInterfaceTest.html", "link": "Psr/Log/Test/LoggerInterfaceTest.html#method_testLogsAtAllLevels", "name": "Psr\\Log\\Test\\LoggerInterfaceTest::testLogsAtAllLevels", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\Test\\LoggerInterfaceTest", "fromLink": "Psr/Log/Test/LoggerInterfaceTest.html", "link": "Psr/Log/Test/LoggerInterfaceTest.html#method_provideLevelsAndMessages", "name": "Psr\\Log\\Test\\LoggerInterfaceTest::provideLevelsAndMessages", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\Test\\LoggerInterfaceTest", "fromLink": "Psr/Log/Test/LoggerInterfaceTest.html", "link": "Psr/Log/Test/LoggerInterfaceTest.html#method_testThrowsOnInvalidLevel", "name": "Psr\\Log\\Test\\LoggerInterfaceTest::testThrowsOnInvalidLevel", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\Test\\LoggerInterfaceTest", "fromLink": "Psr/Log/Test/LoggerInterfaceTest.html", "link": "Psr/Log/Test/LoggerInterfaceTest.html#method_testContextReplacement", "name": "Psr\\Log\\Test\\LoggerInterfaceTest::testContextReplacement", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\Test\\LoggerInterfaceTest", "fromLink": "Psr/Log/Test/LoggerInterfaceTest.html", "link": "Psr/Log/Test/LoggerInterfaceTest.html#method_testObjectCastToString", "name": "Psr\\Log\\Test\\LoggerInterfaceTest::testObjectCastToString", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\Test\\LoggerInterfaceTest", "fromLink": "Psr/Log/Test/LoggerInterfaceTest.html", "link": "Psr/Log/Test/LoggerInterfaceTest.html#method_testContextCanContainAnything", "name": "Psr\\Log\\Test\\LoggerInterfaceTest::testContextCanContainAnything", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Psr\\Log\\Test\\LoggerInterfaceTest", "fromLink": "Psr/Log/Test/LoggerInterfaceTest.html", "link": "Psr/Log/Test/LoggerInterfaceTest.html#method_testContextExceptionKeyCanBeExceptionOrOtherValues", "name": "Psr\\Log\\Test\\LoggerInterfaceTest::testContextExceptionKeyCanBeExceptionOrOtherValues", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "Skyzyx\\Signer", "fromLink": "Skyzyx/Signer.html", "link": "Skyzyx/Signer/Signer.html", "name": "Skyzyx\\Signer\\Signer", "doc": "&quot;The Signer class is designed for those who are signing data on behalf of a public-private keypair.&quot;"},
                                                        {"type": "Method", "fromName": "Skyzyx\\Signer\\Signer", "fromLink": "Skyzyx/Signer/Signer.html", "link": "Skyzyx/Signer/Signer.html#method___construct", "name": "Skyzyx\\Signer\\Signer::__construct", "doc": "&quot;Constructs a new instance of this class.&quot;"},
                    {"type": "Method", "fromName": "Skyzyx\\Signer\\Signer", "fromLink": "Skyzyx/Signer/Signer.html", "link": "Skyzyx/Signer/Signer.html#method_getSelfKey", "name": "Skyzyx\\Signer\\Signer::getSelfKey", "doc": "&quot;Gets the self key that was set in the constructor.&quot;"},
                    {"type": "Method", "fromName": "Skyzyx\\Signer\\Signer", "fromLink": "Skyzyx/Signer/Signer.html", "link": "Skyzyx/Signer/Signer.html#method_getClientId", "name": "Skyzyx\\Signer\\Signer::getClientId", "doc": "&quot;Gets the client key that was set in the constructor.&quot;"},
                    {"type": "Method", "fromName": "Skyzyx\\Signer\\Signer", "fromLink": "Skyzyx/Signer/Signer.html", "link": "Skyzyx/Signer/Signer.html#method_getClientSecret", "name": "Skyzyx\\Signer\\Signer::getClientSecret", "doc": "&quot;Gets the client secret that was set in the constructor.&quot;"},
                    {"type": "Method", "fromName": "Skyzyx\\Signer\\Signer", "fromLink": "Skyzyx/Signer/Signer.html", "link": "Skyzyx/Signer/Signer.html#method_sign", "name": "Skyzyx\\Signer\\Signer::sign", "doc": "&quot;Sign the payload to produce a signature for its contents.&quot;"},
            
            {"type": "Class", "fromName": "Skyzyx\\Signer", "fromLink": "Skyzyx/Signer.html", "link": "Skyzyx/Signer/SignerInterface.html", "name": "Skyzyx\\Signer\\SignerInterface", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Skyzyx\\Signer\\SignerInterface", "fromLink": "Skyzyx/Signer/SignerInterface.html", "link": "Skyzyx/Signer/SignerInterface.html#method_getSelfKey", "name": "Skyzyx\\Signer\\SignerInterface::getSelfKey", "doc": "&quot;Gets the self key that was set in the constructor.&quot;"},
                    {"type": "Method", "fromName": "Skyzyx\\Signer\\SignerInterface", "fromLink": "Skyzyx/Signer/SignerInterface.html", "link": "Skyzyx/Signer/SignerInterface.html#method_getClientId", "name": "Skyzyx\\Signer\\SignerInterface::getClientId", "doc": "&quot;Gets the client key that was set in the constructor.&quot;"},
                    {"type": "Method", "fromName": "Skyzyx\\Signer\\SignerInterface", "fromLink": "Skyzyx/Signer/SignerInterface.html", "link": "Skyzyx/Signer/SignerInterface.html#method_getClientSecret", "name": "Skyzyx\\Signer\\SignerInterface::getClientSecret", "doc": "&quot;Gets the client secret that was set in the constructor.&quot;"},
                    {"type": "Method", "fromName": "Skyzyx\\Signer\\SignerInterface", "fromLink": "Skyzyx/Signer/SignerInterface.html", "link": "Skyzyx/Signer/SignerInterface.html#method_sign", "name": "Skyzyx\\Signer\\SignerInterface::sign", "doc": "&quot;Sign the payload to produce a signature for its contents.&quot;"},
            
            {"type": "Class", "fromName": "WePay\\Signer", "fromLink": "WePay/Signer.html", "link": "WePay/Signer/Signer.html", "name": "WePay\\Signer\\Signer", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "WePay\\Signer\\Signer", "fromLink": "WePay/Signer/Signer.html", "link": "WePay/Signer/Signer.html#method___construct", "name": "WePay\\Signer\\Signer::__construct", "doc": "&quot;Constructs a new instance of this class.&quot;"},
                    {"type": "Method", "fromName": "WePay\\Signer\\Signer", "fromLink": "WePay/Signer/Signer.html", "link": "WePay/Signer/Signer.html#method_getSelfKey", "name": "WePay\\Signer\\Signer::getSelfKey", "doc": "&quot;Gets the self key that was set in the constructor.&quot;"},
                    {"type": "Method", "fromName": "WePay\\Signer\\Signer", "fromLink": "WePay/Signer/Signer.html", "link": "WePay/Signer/Signer.html#method_getClientId", "name": "WePay\\Signer\\Signer::getClientId", "doc": "&quot;Gets the client key that was set in the constructor.&quot;"},
                    {"type": "Method", "fromName": "WePay\\Signer\\Signer", "fromLink": "WePay/Signer/Signer.html", "link": "WePay/Signer/Signer.html#method_getClientSecret", "name": "WePay\\Signer\\Signer::getClientSecret", "doc": "&quot;Gets the client secret that was set in the constructor.&quot;"},
                    {"type": "Method", "fromName": "WePay\\Signer\\Signer", "fromLink": "WePay/Signer/Signer.html", "link": "WePay/Signer/Signer.html#method_sign", "name": "WePay\\Signer\\Signer::sign", "doc": "&quot;Sign the payload to produce a signature for its contents.&quot;"},
                    {"type": "Method", "fromName": "WePay\\Signer\\Signer", "fromLink": "WePay/Signer/Signer.html", "link": "WePay/Signer/Signer.html#method_generateQueryStringParams", "name": "WePay\\Signer\\Signer::generateQueryStringParams", "doc": "&quot;Signs and generates the query string URL parameters to use when making a request.&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


