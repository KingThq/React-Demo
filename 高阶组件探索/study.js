class Box{
    run(){
        console.log("box->run")
    }
}
class Desk extends Box{
    // run(){
    //     // 调用父级的run
    //     super.run();
    //     console.log("desk->run");
    // }
}
let desk = new Desk();
desk.run();