package Unitweight_fla
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   
   public dynamic class MainTimeline extends MovieClip
   {
      
      public function MainTimeline()
      {
         super();
         addFrameScript(0,frame1,1,frame2);
      }
      
      public var mc_ccm:MovieClip;
      
      public var btn_st:SimpleButton;
      
      public function stDownHandler(param1:MouseEvent) : void
      {
         gotoAndStop(2);
      }
      
      function frame1() : *
      {
         stop();
         btn_st.addEventListener(MouseEvent.MOUSE_DOWN,stDownHandler);
      }
      
      public function nt2DownHandler(param1:MouseEvent) : void
      {
         mc_ccm3.gotoAndPlay(2);
      }
      
      function frame2() : *
      {
         stop();
         btn_nt2.addEventListener(MouseEvent.MOUSE_DOWN,nt2DownHandler);
      }
      
      public var btn_nt2:SimpleButton;
      
      public var mc_ccm3:MovieClip;
   }
}
